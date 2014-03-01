class ProductClicksController < ApplicationController

  def index
    @product_click = ProductClick.find 1
  end

  def update

  end

  private
    def params
      
    end
end