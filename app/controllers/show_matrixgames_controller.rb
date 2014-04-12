class ShowMatrixgamesController < ApplicationController
  def show
    @matrixgame = Matrixgame.find params[:id]
    redirect_to matrixgame_path unless @matrixgame.is_recorded?
  end
end