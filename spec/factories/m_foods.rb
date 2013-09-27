# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :m_food, :class => 'M::Food' do
    name "MyString"
    url "MyString"
    price 1
    visibility false
  end
end
