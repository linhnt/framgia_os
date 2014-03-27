class AddShowWinnerToProductAuction < ActiveRecord::Migration
  def change
    add_column :product_auctions, :show_winner, :boolean, default: false
  end
end