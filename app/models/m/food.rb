class M::Food < ActiveRecord::Base
  has_many :m_food_options, class_name: M::FoodOption.name,
    foreign_key: :m_food_id
  scope :visible, ->{where(visibility: 1)}
end
