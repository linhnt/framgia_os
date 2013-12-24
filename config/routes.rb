FramgiaOs::Application.routes.draw do
  devise_for :users
  root to: "home#login"
  get "home/callback" => "home#callback"
  get "mypage" => "home#index"
  resources :framgiaers, only: [:index, :update]
  resources :auto_orders, only: [:create, :destroy]
  resources :orders, only: [:create, :index, :destroy]
end
