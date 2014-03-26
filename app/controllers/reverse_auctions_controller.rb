class ReverseAuctionsController < ApplicationController
  before_action :authenticate_user!

  def create
    product_auction_id = params[:product_auction_id]
    price = params[:price].to_i
    user_id = params[:user_id]
    new_amount = current_user.amount - price
    ReverseAuction.transaction do
      begin
        @reverse_auction = ReverseAuction.create!(price: price,
          user_id: current_user.id, product_auction_id: product_auction_id)
        current_user.update amount: new_amount
      rescue => e
        @error = e.message
      end
      reverse_auction_players = ReverseAuction.player_names(product_auction_id).uniq
      WebsocketRails["reverse_auction"].trigger :total_user, reverse_auction_players
    end
  end
end