class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  validates :facebook_id, presence: true
  
  has_many :orders
  has_many :auto_orders
  has_many :history_clicks, dependent: :destroy
  
  def count_number_of_bigger p_click
    c_array = User.all.map {|u| u.history_clicks.product(p_click).count}
    c_array.reject{|x| x<=self.history_clicks.product(p_click).count}.count
  end

  class << self
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
