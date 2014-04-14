class Matrixgame < ActiveRecord::Base
  scope :visible, ->{where(visibility: true)}
  scope :default_sort, ->{order "created_at DESC"}
  def better_point
    user1_score > user2_score ? user1_score : user2_score
  end

  def rate
    rate = user1_score > user2_score ? user1_score.to_f/user2_score.to_f : user2_score.to_f/user1_score.to_f
    sprintf("%.2f", rate).to_f
  end

  def is_recorded?
    self.result1 && self.result2
  end
  
  def winner_id
    user1_score > user2_score ? user1_id : user2_id
  end

  class << self
    def total_completed_game
      where(done: true).count
    end
    def best_score_games
      where(done: true).sort{|g1,g2| g2.better_point <=> g1.better_point}.first(8)
    end
    def best_rate_games
      where(done: true).sort{|g1,g2| g2.rate <=> g1.rate}.first(8)
    end
    def clear_games
      where(done: false).where(visibility: true).each do |g|
        g.visibility = false
        g.save
      end
    end
  end
end
