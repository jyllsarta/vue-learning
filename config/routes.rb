Rails.application.routes.draw do
  get 'match_illust/index'
  get 'vue_learning/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#index"
  resources :static_pages, only: [:index]
  resources :vue_learning, only: [:index]
end
