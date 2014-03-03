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
      event = WebsocketRails::Event.new(:player2_joined, data: {
      user_name:  current_user.id, 
      name:  current_user.name
    })
    binding.pry
    WebsocketRails.users[@matrixgame.user1_id.to_s].trigger event
    else
      @role = 0
    end
  end

  private
  def redirect_to_home
    redirect_to mypage_path unless user_signed_in?
  end
end
