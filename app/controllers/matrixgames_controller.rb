class MatrixgamesController < ApplicationController
  before_filter :redirect_to_home
  
  def create
    matrixgame = Matrixgame.create
    WebsocketRails["MG-index"].trigger :new_game_added, [matrixgame.id,current_user.name]
    redirect_to matrixgame_path(matrixgame)
  end

  def index
    @matrixgames = Matrixgame.visible.default_sort
  end

  def show
    @matrixgame = Matrixgame.find(params[:id])
    if @matrixgame.user1_id.nil?
      @matrixgame.user1_id = current_user.id
      @matrixgame.save
      @role = 1
    elsif @matrixgame.user2_id.nil?
      @matrixgame.user2_id = current_user.id
      @matrixgame.user1_score = 0
      @matrixgame.user2_score = 0
      @matrixgame.save
      @role = 2
      if WebsocketRails["MG-#{@matrixgame.id}"].subscribers.count == 1
        WebsocketRails["MG-#{@matrixgame.id}"].trigger :new, current_user.name
        WebsocketRails["MG-index"].trigger :new_all, [@matrixgame.id,current_user.name]
      else
        @matrixgame.visibility = false
        @matrixgame.save
        WebsocketRails["MG-index"].trigger :quit_this, [@matrixgame.id]
        redirect_to matrixgames_path
      end
    else
      redirect_to matrixgames_path
    end
  end

  def next_turn
    WebsocketRails["MG-#{params[:game_id]}"].trigger :next_turn, [rand(5..9),rand(5..9),rand(5..9)]
    WebsocketRails["MG-index"].trigger :update_scores, [params[:game_id],params[:user1_score],params[:user2_score]]
    render nothing: true
  end

  def draw_from_socket
    WebsocketRails["MG-#{params[:game_id]}"].trigger :draw_from_socket, params[:data]
    render nothing: true
  end

  def set_game_end
    game = Matrixgame.find(params[:game_id].to_i)
    game.user1_score = params[:user1_score].to_i
    game.user2_score = params[:user2_score].to_i
    game.done = true
    game.save
    WebsocketRails["MG-#{params[:game_id]}"].trigger :game_end, params[:data]
    WebsocketRails["MG-index"].trigger :game_end_all, params[:game_id]
    render nothing: true
  end

  def set_game_quit
    game = Matrixgame.find(params[:game_id].to_i)
    game.visibility = false
    game.save
    WebsocketRails["MG-index"].trigger :quit_this, [params[:game_id].to_i]
    render nothing: true
  end

  private
  def redirect_to_home
    redirect_to mypage_path unless user_signed_in?
  end
end
