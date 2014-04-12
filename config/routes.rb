FramgiaOs::Application.routes.draw do
  resources :product_auctions

  resources :reverse_auctions

  devise_for :users
  root to: "home#login"
  get "home/callback" => "home#callback"
  get "mypage" => "home#index"
  get "test_broadcast_message" => "home#test_broadcast_message"
  get "test_message" => "home#test_message"
  get "next_turn" => "matrixgames#next_turn"
  get "draw_from_socket" => "matrixgames#draw_from_socket"
  get "set_game_end" => "matrixgames#set_game_end"
  get "set_game_quit" => "matrixgames#set_game_quit"
  get "get_click_result" => "product_clicks#get_click_result"
  get "after_create_game" => "matrixgames#after_create_game"
  get "after_join_game" => "matrixgames#after_join_game"
  get "send_game_mess" => "matrixgames#send_game_mess"
  resources :framgiaers, only: [:index, :update]
  resources :matrixgames, only: [:index, :show, :create]
  resources :show_matrixgames, only: [:show]
  resources :auto_orders, only: [:create, :destroy]
  resources :orders, only: [:create, :index, :destroy]
  resources :product_clicks, only: [:index, :update]
  namespace :visitor do
    resources :product_auctions, only: [:index, :show]
  end
end
