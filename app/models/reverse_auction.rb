class ReverseAuction < ActiveRecord::Base
  validates :user_id, :product_auction_id, presence: true
  validates :price, numericality: {greater_than: 0}

  belongs_to :product_auction
  belongs_to :user

  scope :histories, ->user{where user_id: user.id}
  scope :by_auctions, ->{where auction: true}
  # winers.fisrt => winer
  # scope :winers, ->product_auction_id{where(product_auction_id: product_auction_id)
  #   .group("price").having("count(id) = ?", 1).order("price")}
  scope :by_product_auction_id, ->product_auction_id{where(product_auction_id: product_auction_id)}

  class << self
    def player_names id
      users = self.by_product_auction_id(id).map do |reverse_auction|
        reverse_auction.user
      end
      users.map{|user| user.name}
    end

    def get_winner product_auction_id
      reverse_auction = self.by_product_auction_id(product_auction_id).first
      if reverse_auction
        prod_auction =  reverse_auction.product_auction
        if prod_auction.show_winner
          dups = []
          reverse_auctions = ReverseAuction.by_product_auction_id(product_auction_id)
          reverse_auctions.each do |r|
            dups = dups + check_dup(reverse_auctions, r)
          end
          uniqs = reverse_auctions - dups
          winner = uniqs.sort{|b, a| b.price <=> a.price}.first.try(:user)
          winner ? winner.name : nil
        end
      end
    end

    def check_dup active_record, obj
      dups = active_record.where(price: obj.price).to_a
      active_record = active_record - dups
      dups.count > 1 ? dups : []
    end
  end
end