class ReverseAuction < ActiveRecord::Base
  validates :user_id, :product_auction_id, presence: true
  validates :price, numericality: {greater_than: 0}

  belongs_to :product_auction
  belongs_to :user

  scope :histories, ->user{where user_id: user.id}
  scope :by_auctions, ->{where auction: true}
  # winers.fisrt => winer
  scope :winers, ->product_id{where(product_auction_id: product_id)
    .group("price").having("count(id) = ?", 1).order("price")}
end
