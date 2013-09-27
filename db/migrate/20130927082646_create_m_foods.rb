class CreateMFoods < ActiveRecord::Migration
  def change
    create_table :m_foods do |t|
      t.string :name
      t.string :url
      t.integer :price
      t.boolean :visibility, default: true

      t.timestamps
    end
  end
end
