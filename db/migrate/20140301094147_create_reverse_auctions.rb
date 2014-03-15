class CreateReverseAuctions < ActiveRecord::Migration
  def change
    create_table :reverse_auctions do |t|
      t.integer :price
      t.integer :user_id
      t.integer :product_auction_id

      t.timestamps
    end
  end
end
