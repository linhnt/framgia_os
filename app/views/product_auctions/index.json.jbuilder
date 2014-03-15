json.array!(@product_auctions) do |product_auction|
  json.extract! product_auction, :user_id, :start_time, :end_time, :m_food_id
  json.url product_auction_url(product_auction, format: :json)
end
