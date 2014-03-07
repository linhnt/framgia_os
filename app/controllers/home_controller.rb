class HomeController < ApplicationController
  protect_from_forgery

  def index
    @m_foods = M::Food.all.order("id")
    @orders = Order.where(state: "init").order("id desc").all
    if params[:visible].present?
      visible = params[:visible] == "enable" ? true : false
      food = M::Food.find(params[:food_id])
      food.update_attributes(visibility: visible)
      if visible == true
        AutoOrder.all.each do |auto_order|
          if auto_order.user.orders.where(m_food_id: params[:food_id], m_food_option_id: auto_order.m_food_option.id)
            .order_today.count == 0 && food.m_food_options.pluck(:id).include?(auto_order.m_food_option.id)
            begin
              Order.create(user_id: auto_order.user.id,
                m_food_id: params[:food_id],
                m_food_option_id: auto_order.m_food_option.id,
                quantity: 1, turn_id: Turn.last.id)
              current_amount = auto_order.user.amount
              now_price = M::Food.find(params[:food_id]).price
              auto_order.user.update_attributes(amount: (current_amount - now_price))
            rescue
            end
          end
        end
      end
    end
  end

  def login
    if params[:target] == "sign_out"
      sign_out current_user
    end
    if user_signed_in?
      redirect_to mypage_path
    end
    session[:oauth] = Koala::Facebook::OAuth.new(APP_ID, APP_SECRET, SITE_URL + '/home/callback')
    @auth_url =  session[:oauth].url_for_oauth_code(:permissions=>"read_stream")
    puts session.to_s + "<<< session"
    respond_to do |format|
      format.html {  }
    end
  end

  def callback
    if params[:code]
      session[:access_token] = session[:oauth].get_access_token(params[:code])
    end

    @api = Koala::Facebook::API.new(session[:access_token])
    begin
      data = @api.get_object("me")
      avatar = @api.get_picture(data["id"])
      @user = User.check_user data
      @user.update_attributes(avatar: avatar) unless @user.avatar
      sign_in @user
      redirect_to mypage_path
    rescue Exception=>ex
      puts ex.message
    end

    respond_to do |format|
     format.html {   }
    end
  end

  def test_message
    event = WebsocketRails::Event.new(:new_message, data: {
      user_name:  current_user.id, 
      received:   Time.now.to_s(:short), 
      msg_body:   ERB::Util.html_escape("test") 
    })
    #WebsocketRails.users[current_user.id.to_s].trigger event
    WebsocketRails[:matrix].trigger(:new, "test")
    render nothing: true
  end

  def test_broadcast_message
    WebsocketRails.users.each do |connection|
      event = WebsocketRails::Event.new(:new_message, data: {
        user_name:  current_user.id, 
        received:   Time.now.to_s(:short), 
        msg_body:   ERB::Util.html_escape("test") 
      })
      connection.trigger event
    end
    render nothing: true
  end
end
