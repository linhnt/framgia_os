class AddDoneToMatrixgames < ActiveRecord::Migration
  def change
    add_column :matrixgames, :done, :boolean, default: false
  end
end
