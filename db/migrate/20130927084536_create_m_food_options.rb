class CreateMFoodOptions < ActiveRecord::Migration
  def change
    create_table :m_food_options do |t|
      t.integer :m_food_id
      t.string :name

      t.timestamps
    end
  end
end
