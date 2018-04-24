Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: 'registrations', sessions: 'sessions'}
  root to: "dashboard#home"
  get '/hearted', to: 'dashboard#home'
  get '/popular', to: 'dashboard#home'
  get '/city/:id', to: 'dashboard#home'
  get '/city', to: 'dashboard#home'
  get '/users/check_for_user', to: 'users#check_for_user', as: :check_for_user
  get '/cities/hearted', to: 'cities#hearted', as: :city_hearted
  get '/cities/add_heart/:id', to: 'cities#add_heart', as: :add_heart
  get '/cities/remove_heart/:id', to: 'cities#remove_heart', as: :remove_heart
  


  resources :cities
  #, only: [:index, :new, :create, :show]
  #end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
