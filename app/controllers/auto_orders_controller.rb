class AutoOrdersController < ApplicationController
  def create
    if params[:visible] == "enable"
      current_user.auto_orders.create(m_food_id: params[:m_food_id], m_food_option_id: params[:m_food_option_id])
      food = M::Food.find params[:m_food_id]
      if current_user.orders.where(m_food_id: params[:m_food_id], m_food_option_id: params[:m_food_option_id])
        .order_today.count == 0 && food.visible?
        begin
          Order.create(user_id: current_user.id,
            m_food_id: params[:m_food_id],
            m_food_option_id: params[:m_food_option_id],
            quantity: 1, turn_id: Turn.last.id)
          current_amount = current_user.amount
          now_price = food.price
          current_user.update_attributes(amount: (current_amount - now_price))
        rescue
        end
      end
    end
    redirect_to root_path
  end
  
  def destroy
    @auto_order = AutoOrder.find params[:id]
    @auto_order.destroy
    redirect_to root_path
  end
end
