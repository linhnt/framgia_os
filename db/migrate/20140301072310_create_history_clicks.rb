class CreateHistoryClicks < ActiveRecord::Migration
  def change
    create_table :history_clicks do |t|
      t.integer :product_click_id
      t.integer :user_id

      t.timestamps
    end
  end
end
