class FramgiaersController < ApplicationController
  before_filter :checking_user
  def index
    @users = User.all
    if params[:apply] == "deliever"
      Order.where(state: "init").all.each do |order|
        order.deliever!
      end
    end
    if params[:show] == "show_orders"
      render :show_orders
    end
  end

  def update
    begin
      user = User.find params[:id]
      user.update_attributes(amount: user.amount + params[:money].to_i)
    rescue
    end
    redirect_to framgiaers_path
  end
  private
  def checking_user
    redirect_to mypage_path unless current_user.try(:is_admin)
  end
end
