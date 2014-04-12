class AddResult1ToMatrixgame < ActiveRecord::Migration
  def change
    add_column :matrixgames, :result1, :string
    add_column :matrixgames, :result2, :string
  end
end
