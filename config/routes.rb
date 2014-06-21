Rails.application.routes.draw do
  get '' => 'application#index'

  resources :countries, only: [:index]
  put 'countries#upvote' => 'countries#upvote'
end
