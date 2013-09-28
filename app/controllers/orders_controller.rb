class OrdersController < ApplicationController
  def create
    begin
      Order.create(user_id: current_user.id,
        m_food_id: params[:m_food_id].to_i,
        m_food_option_id: params[:m_food_option_id].to_i,
        quantity: params[:quantity].to_i)
    rescue
    end
    redirect_to mypage_path
  end
end
