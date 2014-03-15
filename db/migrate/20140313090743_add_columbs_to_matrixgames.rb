class AddColumbsToMatrixgames < ActiveRecord::Migration
  def change
    add_column :matrixgames, :user1_score, :integer
    add_column :matrixgames, :user2_score, :integer
    remove_column :matrixgames, :result, :integer
  end
end
