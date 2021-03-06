Rails.application.routes.draw do
  namespace :api, defaults: { format: "json" } do
    resources :users, only: [:new, :create, :show, :update] do
      resources :photos, only: [:index]
    end
    resource :session, only: [:new, :create, :destroy]
    resources :photos, only: [:create, :show]

    post 'follows', to: 'follows#create'
    delete 'follows', to: 'follows#destroy'

    get 'likes', to: 'likes#show'
    post 'likes', to: 'likes#create'
    delete 'likes', to: 'likes#destroy'

    get 'feed', to: 'photos#feed'

    post 'photos/search', to: 'photos#search'
    post 'users/search', to: 'users#search'

  end
  root "static_pages#root"
end
