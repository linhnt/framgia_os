class CreateProductAutions < ActiveRecord::Migration
  def change
    create_table :product_autions do |t|
      t.integer :m_food_id
      t.datetime :start_time
      t.datetime :end_time
      t.boolean :auction, default: false

      t.timestamps
    end
  end
end
