class ProductClicksController < ApplicationController

  def index
    @product_click = ProductClick.last
    @count = current_user.history_clicks.product(@product_click).count
  end

  def update
    @product_click = ProductClick.find params[:id]
    respond_to do |format|
      @product_click.price = @product_click.price - 1000
      current_user.amount = current_user.amount - 1000
      history_click = @product_click.history_clicks.build(user_id: current_user.id)
      if @product_click.save && current_user.save && history_click.save
        if @product_click.price <= 0 && !@product_click.winer_id
          @product_click.winer_id = current_user.id
          @product_click.save
        end
        @count = current_user.history_clicks.product(@product_click).count
        format.js
      else
        redirect_to product_clicks
      end
    end
  end
end