class HomeController < ApplicationController
  protect_from_forgery

  def index
    @m_foods = M::Food.visible
  end

  def login
    if user_signed_in?
      sign_out current_user
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
      @user = User.check_user data
      sign_in @user
      redirect_to mypage_path
    rescue Exception=>ex
      puts ex.message
    end

    respond_to do |format|
     format.html {   }
    end
  end
end
