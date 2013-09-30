class Turn < ActiveRecord::Base
  has_many :orders
end
