class M::Food < ActiveRecord::Base
  has_many :m_food_options, class_name: M::FoodOption.name,
    foreign_key: :m_food_id
  has_many :product_id
  has_many :product_auctions, dependent: :destroy, foreign_key: :m_food_id

  scope :visible, ->{where(visibility: true)}
  scope :by_auctions, ->{where auction: true}

  def visible?
    self.visibility
  end
end
