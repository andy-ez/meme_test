Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'pages#index', as: 'home'
  post 'create_pic', to: 'pages#create_pic'
end
