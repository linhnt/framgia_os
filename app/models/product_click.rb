class ProductClick < ActiveRecord::Base
  has_many :history_clicks, dependent: :destroy
  belongs_to :food, foreign_key: :product_id, class_name: M::Food
  belongs_to :user, foreign_key: :winer_id, class_name: :User

end
