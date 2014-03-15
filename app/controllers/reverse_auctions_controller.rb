class ReverseAuctionsController < ApplicationController
  before_action :authenticate_user!

  def index
    @reverse_auctions = ReverseAuction.histories current_user
  end

  def new
    @reverse_auction = ReverseAuction.new
    @auction_product = M::Food.by_auctions.first
  end

  def create
    product_id = params[:product_id]
    price = params[:price].to_i
    user_id = params[:user_id]
    new_amount = current_user.amount - price
    ReverseAuction.transaction do
      begin
        @reverse_auction = ReverseAuction.create!(price: price,
          user_id: current_user.id, product_auction_id: product_id)
        current_user.update amount: new_amount
      rescue => e
        @error = e.message
      end
    end
  end
end
