class ProductClicksController < ApplicationController

  def index
    @user = current_user
    @product_click = ProductClick.last
    @count = current_user.history_clicks.product(@product_click).count
  end

  def update
    @product_click = ProductClick.find params[:id]
    WebsocketRails["PK-index"].trigger :one_click
    respond_to do |format|
      @product_click.price = @product_click.price - 1000
      current_user.amount = current_user.amount - 1000
      history_click = @product_click.history_clicks.build(user_id: current_user.id)
      if @product_click.save && current_user.save && history_click.save
        @count = current_user.history_clicks.product(@product_click).count
        @count_user = current_user.count_number_of_bigger @product_click
        format.js
      else
        redirect_to product_clicks
      end
    end
  end

  def get_click_result
    product_click = ProductClick.find params[:id]
    WebsocketRails["PK-index"].trigger :game_click_end
    return if product_click.winer_id
    if product_click.price > 0
      product_click.winer_id = 0
    else
      max = User.all.map {|u| u.history_clicks.product(product_click).count}.max
      product_click.winer_id = User.select{|u| u.history_clicks.product(product_click).count == max}.sample.id
    end
    product_click.save
    render nothing: true
  end
end