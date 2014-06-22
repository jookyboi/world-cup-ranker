Rails.application.routes.draw do
  get '' => 'application#index'

  resources :countries, only: [:index, :update]
end
