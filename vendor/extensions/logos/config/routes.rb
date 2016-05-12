Refinery::Core::Engine.routes.draw do

  # Frontend routes
  namespace :logos do
    resources :logos, :path => '', :only => [:index, :show]
  end

  # Admin routes
  namespace :logos, :path => '' do
    namespace :admin, :path => Refinery::Core.backend_route do
      resources :logos, :except => :show do
        collection do
          post :update_positions
        end
      end
    end
  end

end
