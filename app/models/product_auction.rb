class ProductAuction < ActiveRecord::Base
  validates :start_time, :end_time, presence: true
  validate :check_end_time

  belongs_to :m_food, class_name: M::Food

  scope :food_auctions, -> do
    where("start_time <= ? AND (end_time IS NULL OR end_time > ?)",
    DateTime.now, DateTime.now)
  end

  scope :cur_reverse_auctions, -> do
    where("start_time < ? And end_time > ?", DateTime.now, DateTime.now)
  end

  def cur_reverse_auction?
    ProductAuction.cur_reverse_auctions.where(id: self.id).count > 0
  end

  private
  def check_end_time
    if self.start_time && self.end_time && self.start_time > self.end_time
      errors.add(:end_time, "must be greater than #{self.start_time}")
    end
  end
end