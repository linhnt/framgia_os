# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :m_food_option, :class => 'M::FoodOption' do
    m_food_id 1
    name "MyString"
  end
end
