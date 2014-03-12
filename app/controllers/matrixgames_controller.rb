class MatrixgamesController < ApplicationController
  before_filter :redirect_to_home
  def index
    @matrixgames = Matrixgame.visible
  end

  def show
    @matrixgame = Matrixgame.find(params[:id])
    if @matrixgame.user1_id.nil?
      @matrixgame.user1_id = current_user.id
      @matrixgame.save
      @role = 1
    elsif @matrixgame.user2_id.nil?
      @matrixgame.user2_id = current_user.id
      @matrixgame.save
      @role = 2
      WebsocketRails["MG-#{@matrixgame.id}"].trigger :new, current_user.name
    else
      @role = 0
    end
  end

  def next_turn
    WebsocketRails["MG-#{params[:game_id]}"].trigger :next_turn, [rand(5..9),rand(5..9),rand(5..9)]
    render nothing: true
  end

  def draw_from_socket
    WebsocketRails["MG-#{params[:game_id]}"].trigger :draw_from_socket, params[:data]
    render nothing: true
  end

  private
  def redirect_to_home
    redirect_to mypage_path unless user_signed_in?
  end
end
