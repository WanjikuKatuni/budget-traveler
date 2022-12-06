Rails.application.routes.draw do
  resources :destinations, only: [:index, :show, :create, :update]

  patch "/destinations/:id/like", to: "destinations#increment_likes"



  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
