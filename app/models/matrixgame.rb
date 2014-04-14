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
  
  class << self
    def user_static user_id
      games = where(done:true).where("user1_id=? or user2_id=?",user_id,user_id)
      count = games.count
      return "You are new member of Matrixgame! Welcome :)" if count == 0
      win = 0
      games.each do |game|
        win = win + 1 if (game.user1_id == user_id && game.user1_score > game.user2_score) || (game.user2_id == user_id && game.user2_score > game.user1_score)
      end
      "You completed #{count} games with #{win} wins. Win rate: #{win*100/count}%."
    end
    def total_completed_game
      where(done: true).count
    end
    def best_score
      where(done: true).sort{|g1,g2| g1.better_point <=> g2.user2_score}.last
    end
    def best_rate
      where(done: true).sort{|g1,g2| g1.rate <=> g2.rate}.last
    end
    def clear_games
      where(done: false).where(visibility: true).each do |g|
        g.visibility = false
        g.save
      end
    end
  end
end
