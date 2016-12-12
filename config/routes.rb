Rails.application.routes.draw do
  namespace :api, defaults: { format: "json" } do
    resources :users, only: [:new, :create, :show, :update]
    resource :session, only: [:new, :create, :destroy]

    post 'follows', to: 'follows#create'
    delete 'follows', to: 'follows#destroy'
  end
  root "static_pages#root"
end
