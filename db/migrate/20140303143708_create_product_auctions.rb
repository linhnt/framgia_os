class CreateProductAuctions < ActiveRecord::Migration
  def change
    create_table :product_auctions do |t|
      t.datetime :start_time
      t.datetime :end_time
      t.integer :m_food_id
      t.boolean :auction , default: false

      t.timestamps
    end
  end
end
