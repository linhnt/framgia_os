class OrdersController < ApplicationController
  def create
    begin
      Order.create(user_id: current_user.id,
        m_food_id: params[:m_food_id].to_i,
        m_food_option_id: params[:m_food_option_id].to_i,
        quantity: params[:quantity].to_i, turn_id: Turn.last.id)
      current_amount = current_user.amount
      now_price = M::Food.find(params[:m_food_id]).price * params[:quantity].to_i
      current_user.update_attributes(amount: (current_amount - now_price))
    rescue
    end
    redirect_to mypage_path
  end
end
