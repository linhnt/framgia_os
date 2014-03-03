class CreateMatrixgames < ActiveRecord::Migration
  def change
    create_table :matrixgames do |t|
      t.integer :user1_id
      t.integer :user2_id
      t.boolean :visibility, default: true
      t.integer :result

      t.timestamps
    end
  end
end
