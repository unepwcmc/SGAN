# config valid only for Capistrano 3.1
lock '3.4.0'

set :application, 'sgan'
set :scm, :git
set :repo_url, 'git@bitbucket.org:builtbyclick/sgan.git'
set :deploy_to, '/home/ubuntu'
set :keep_releases, 5
set :use_sudo, false
set :tmp_dir, '/home/ubuntu/tmp'

namespace :deploy do

  desc 'Restart application'
  task :start do ; end
  task :stop do ; end
  task :restart do
    on roles(:app), in: :sequence do
      execute "touch #{File.join(current_path,'tmp','restart.txt')}"
    end
  end
  after :publishing, :restart

  desc 'Rebuild the sphinx config'
  task :configure_sphinx do
    on roles(:app), in: :sequence do
      within release_path do
        with rails_env: fetch(:rails_env) do
          execute :rake, 'ts:configure'
        end
      end
    end
  end
  before :restart, :configure_sphinx

  task :symlink_database do
    on roles(:app), in: :sequence do
      execute "ln -nfs #{shared_path}/config/database.yml #{release_path}/config/database.yml"
    end
  end
  # before :compile_assets, :symlink_database
  before :migrate, :symlink_database

end
