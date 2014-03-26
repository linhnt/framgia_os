class ProductAuctionsController < ApplicationController
  before_action :set_product_auction, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!
  before_action :authenticate_admin

  def index
    @product_auctions = ProductAuction.all
  end

  def show
  end

  def new
    @product_auction = ProductAuction.new
  end

  def edit
  end

  def create
    @product_auction = ProductAuction.new(product_auction_params)

    respond_to do |format|
      if @product_auction.save
        format.html { redirect_to @product_auction, notice: 'Product auction was successfully created.' }
        format.json { render action: 'show', status: :created, location: @product_auction }
      else
        format.html { render action: 'new' }
        format.json { render json: @product_auction.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      format.html do
        if @product_auction.update(product_auction_params)
          format.html { redirect_to @product_auction, notice: 'Product auction was successfully updated.' }
        else
          format.html { render action: 'edit' }
        end
      end
      format.js do
        @product_auction.update(product_auction_params)
        WebsocketRails["show_winner"].trigger :get_winner, ReverseAuction.get_winner(@product_auction.id)
      end
    end
  end

  def destroy
    @product_auction.destroy
    respond_to do |format|
      format.html { redirect_to product_auctions_url }
      format.json { head :no_content }
    end
  end

  private
    def set_product_auction
      @product_auction = ProductAuction.find(params[:id])
    end
    def product_auction_params
      params.require(:product_auction).permit(:start_time, :end_time, :m_food_id, :show_winner)
    end
    def authenticate_admin
      redirect_to root_path unless current_user.is_admin?
    end
end
