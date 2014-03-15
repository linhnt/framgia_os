class AddWinerIdToProductClicks < ActiveRecord::Migration
  def change
    add_column :product_clicks, :winer_id, :integer
  end
end
