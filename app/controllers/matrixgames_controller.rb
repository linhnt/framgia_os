class MatrixgamesController < ApplicationController
  before_filter :redirect_to_home
  
  def create
    matrixgame = Matrixgame.create
    # WebsocketRails["MG-index"].trigger :new_game_added, [matrixgame.id,current_user.name]
    redirect_to matrixgame_path(matrixgame)
  end

  def after_create_game
    WebsocketRails["MG-index"].trigger :new_game_added, [params[:game_id],current_user.name]
    render nothing: true
  end

  def after_join_game
   @matrixgame = Matrixgame.find params[:game_id].to_i
   if WebsocketRails["MG-#{@matrixgame.id}"].subscribers.count == 1
     WebsocketRails["MG-#{@matrixgame.id}"].trigger :new, current_user.name
   else
     @matrixgame.visibility = false
     @matrixgame.save
     WebsocketRails["MG-index"].trigger :quit_this, [@matrixgame.id]
     redirect_to matrixgames_path
   end
  end

  def send_game_mess
    return if params[:chat_text] == ""
    content = params[:chat_text].gsub("<script>","").gsub("</script>","");
    @matrixgame = Matrixgame.find params[:game_id].to_i
    WebsocketRails["MG-#{@matrixgame.id}"].trigger :send_game_mess, "<b>#{params[:user_name]}</b>: #{content}"
    render nothing: true
  end

  def index
    if params[:show_all]
       @matrixgames = Matrixgame.visible.default_sort
     else
       @matrixgames = Matrixgame.visible.default_sort.first(10)
     end
     @best_score_games = Matrixgame.best_score_games
     @best_rate_games = Matrixgame.best_rate_games
     @best_rate_users = User.best_rate_users
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
      WebsocketRails["MG-index"].trigger :new_all, [@matrixgame.id,current_user.name]
      @role = 2
    else
      redirect_to matrixgames_path
    end
  end

  def next_turn
    WebsocketRails["MG-#{params[:game_id]}"].trigger :next_turn, [rand(6..9),rand(6..9),rand(6..9)]
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
    game.result1 = params[:user1_state]
    game.result2 = params[:user2_state]
    game.done = true
    game.save
    WebsocketRails["MG-#{params[:game_id]}"].trigger :game_end, params[:data]
    WebsocketRails["MG-index"].trigger :game_end_all, params[:game_id]
    render nothing: true
  end

  def set_game_quit
    game = Matrixgame.find(params[:game_id].to_i)
    unless game.done
      game.visibility = false
      game.save
      WebsocketRails["MG-index"].trigger :quit_this, [params[:game_id].to_i]
    end
    render nothing: true
  end

  private
  def redirect_to_home
    redirect_to mypage_path unless user_signed_in?
  end
end
