class Order < ActiveRecord::Base
  belongs_to :m_food, class_name: M::Food.name
  belongs_to :m_food_option, class_name: M::FoodOption.name
  belongs_to :user
end
