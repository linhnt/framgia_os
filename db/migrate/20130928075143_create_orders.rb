class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.integer :m_food_id
      t.integer :m_food_option_id
      t.integer :quantity
      t.integer :user_id
      t.integer :turn_id

      t.timestamps
    end
  end
end
