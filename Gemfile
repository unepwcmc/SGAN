source 'https://rubygems.org'

gem 'rails', '6.1.7.3'

# Bundle edge Rails instead:
# gem 'rails', :git => 'git://github.com/rails/rails.git'


# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'sass-rails', '~> 5.0.8'
  gem 'coffee-rails', '~> 4.2.2'

  # See https://github.com/sstephenson/execjs#readme for more supported runtimes
  # gem 'therubyracer', :platforms => :ruby

  gem 'uglifier', '>= 2.7.2'
end

gem 'jquery-rails', '>= 4.4.0'
gem 'jquery-ui-rails', '>= 6.0.0'

# Refinery CMS
gem 'refinerycms', '~> 4.0.0'
gem 'refinerycms-nested_models', '>= 0.1.0'
gem 'refinerycms-copywriting'

# Optionally, specify additional Refinery CMS Extensions here:
gem 'refinerycms-acts-as-indexed', '~> 3.0.0'

gem 'mysql2'
gem 'rack-rewrite'
gem 'rack', '>= 3.0.0'
gem 'rack-mini-profiler', '>= 0.10.1'
gem 'unicorn'
gem 'awesome_nested_set'
gem 'friendly_id', '>= 5.0.3'
gem 'thinking-sphinx', '~> 3.1.3'
gem 'will_paginate', '~> 3.0'

group :test do
  #gem 'refinerycms-testing'
end 

group :development do
  gem 'better_errors', '>= 2.8.0'
  gem 'binding_of_caller'
  gem 'pry-rails'
  gem 'awesome_print'
  gem 'letter_opener'
end

group :test, :development do
  gem 'spork-rails'
  gem 'rspec-rails', '>= 3.5.0'
  # gem 'rb-fsevent', :require => false if RUBY_PLATFORM =~ /darwin/i
  gem 'guard'
  gem 'guard-rails'
  gem 'guard-rspec'
  gem 'guard-spork'
  gem 'guard-bundler', require: false
  gem 'guard-livereload', '>= 2.5.2'
  gem 'factory_girl_rails'
  gem 'capybara'
  gem 'faker'
end

group :assets do
  gem 'autoprefixer-rails'
  gem 'compass-rails', '~> 3.0.0'
  gem 'compass', '~> 1.0.3.0.0'
  gem 'susy'
  gem 'breakpoint'
end

gem 'fog'
gem 'unf'
gem 'lograge'
gem 'shortcode'

# Deployment

gem 'capistrano', '~> 3.5', '>= 3.5.0', require: false
gem 'capistrano-rails', '~> 1.1', '>= 1.1.3', require: false
gem 'capistrano-bundler', '~> 1.1', '>= 1.1.4', require: false
gem 'capistrano-rvm', '~> 0.1', '>= 0.1.2', require: false
gem 'whenever', :require => false
gem 'capistrano-passenger', '~> 0.2.0', require: false


gem 'pg'

gem 'refinerycms-events', :path => 'vendor/extensions'
gem 'refinerycms-documents', :path => 'vendor/extensions'
gem 'refinerycms-logos', :path => 'vendor/extensions'
