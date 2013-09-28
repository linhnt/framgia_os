# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :order do
    m_food_id 1
    m_food_option_id 1
    quantity 1
    user_id 1
  end
end
