class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  validates :facebook_id, presence: true
  
  has_many :orders
  has_many :auto_orders
  has_many :history_clicks, dependent: :destroy
  
  def count_game
    Matrixgame.where(done:true).where("user1_id=? or user2_id=?",self.id,self.id).count
  end
  def count_win_game
    games = Matrixgame.where(done:true).where("user1_id=? or user2_id=?",self.id,self.id)
    win = 0
    games.each do |game|
      win = win + 1 if (game.user1_id == self.id && game.user1_score > game.user2_score) || (game.user2_id == self.id && game.user2_score > game.user1_score)
    end
    return win
  end
  def user_static
    count = self.count_game
    return 0 if count == 0
    win = self.count_win_game
    return win*100/count
  end
  def count_number_of_bigger p_click
    c_array = User.all.map {|u| u.history_clicks.product(p_click).count}
    c_array.reject{|x| x<=self.history_clicks.product(p_click).count}.count
  end

  class << self
    def best_rate_users
      all.reject{|x| x.count_game<20}.sort{|u1,u2| u2.user_static <=> u1.user_static}.first(8)
    end
    def check_user data
      unless user = User.where(facebook_id: data["id"]).first
        user = User.create(facebook_id: data["id"], name: data["name"],
          email: "#{data["username"]}@framgia-order.com",
          password: data["id"], facebook_link: data["link"])
      end
      user
    end
  end
end
