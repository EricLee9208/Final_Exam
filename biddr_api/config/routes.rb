Rails.application.routes.draw do
  # get 'sessions/new'
  # get 'sessions/create'
  # get 'sessions/destroy'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
resources :auctions do
  resources :bids, only: [:create]
end
resource :session, only:[:new, :create, :destroy]
root "auctions#index"
  

  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :auctions do
        resources :bids, only: [:create]

      end
      
      resource :session, only: [:create, :destroy]
      resource :users, only: [:create] do
        get :current, on: :collection
      end
      resources :bids, only: [:create]
    end
  end
end
