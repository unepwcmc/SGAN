Refinery::Core::Engine.routes.draw do

  # Frontend routes
  namespace :documents, path: 'categories' do
    resources :categories, :path => '', :only => [:index, :show]
  end

  # Frontend routes
  namespace :documents, path: 'resources' do
    resources :documents, :path => '', :only => [:index, :show]
  end

  # Admin routes
  namespace :documents, :path => '' do
    namespace :admin, :path => "#{Refinery::Core.backend_route}/documents" do
      resources :categories, :except => :show do
        collection do
          post :update_positions
        end
        member do
          get :children
        end
      end
    end
  end

  # Admin routes
  namespace :documents, :path => '' do
    namespace :admin, :path => Refinery::Core.backend_route do
      resources :documents, :except => :show do
        collection do
          post :update_positions
        end
      end
    end
  end

end
