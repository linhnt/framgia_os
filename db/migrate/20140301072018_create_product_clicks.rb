class CreateProductClicks < ActiveRecord::Migration
  def change
    create_table :product_clicks do |t|
      t.integer :product_id
      t.integer :price

      t.timestamps
    end
  end
end
