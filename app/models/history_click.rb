class HistoryClick < ActiveRecord::Base
  belongs_to :user
  belongs_to :product_click

  scope :product, ->product_click {where product_click_id: product_click.id}
end
