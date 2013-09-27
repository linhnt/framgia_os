FramgiaOs::Application.routes.draw do
  devise_for :users
  root to: "home#login"
  get "home/callback" => "home#callback"
  get "mypage" => "home#index"
  resources :framgiaers
end
