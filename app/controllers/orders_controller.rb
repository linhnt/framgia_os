class OrdersController < ApplicationController
  
  def index
    redirect_to root_path unless user_signed_in?
  end
  
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
  
  def destroy
    order = Order.find(params[:id]).destroy
    user = order.user
    user.amount += order.quantity.to_i * order.m_food.price.to_i
    user.save
    redirect_to mypage_path
  end
end
