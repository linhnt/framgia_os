FramgiaOs::Application.routes.draw do
  devise_for :users
  root to: "home#login"
  get "home/callback" => "home#callback"
  get "mypage" => "home#index"
  get "test_broadcast_message" => "home#test_broadcast_message"
  get "test_message" => "home#test_message"
  get "next_turn" => "matrixgames#next_turn"
  get "draw_from_socket" => "matrixgames#draw_from_socket"
  resources :framgiaers, only: [:index, :update]
  resources :matrixgames, only: [:index, :show]
  resources :auto_orders, only: [:create, :destroy]
  resources :orders, only: [:create, :index, :destroy]
  resources :product_clicks, only: [:index, :update]
end
