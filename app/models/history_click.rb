class HistoryClick < ActiveRecord::Base
  belongs_to :user
  belongs_to :product_click
end
