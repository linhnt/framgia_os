json.array!(@reverse_auctions) do |reverse_auction|
  json.extract! reverse_auction, :user_id, :price, :m_food_id
  json.url reverse_auction_url(reverse_auction, format: :json)
end
