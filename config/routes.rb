Rails.application.routes.draw do
  resources :reviews, only: [:index, :show, :create,:destroy]
  resources :users, only: [:index, :show]
  resources :destinations

  patch "/destinations/:id/like", to: "destinations#increment_likes"



  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
