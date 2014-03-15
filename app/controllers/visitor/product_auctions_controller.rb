class Visitor::ProductAuctionsController < ApplicationController
  before_action :authenticate_user!

  def index
    @product_auctions = ProductAuction.food_auctions
  end

  def show
    @product_auction = ProductAuction.find params[:id]
  end
end
