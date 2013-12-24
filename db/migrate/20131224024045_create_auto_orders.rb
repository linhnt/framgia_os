class CreateAutoOrders < ActiveRecord::Migration
  def change
    create_table :auto_orders do |t|
      t.references :user
      t.references :m_food
      t.references :m_food_option
      t.string :status

      t.timestamps
    end
  end
end
