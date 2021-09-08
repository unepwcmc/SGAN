source 'https://rubygems.org'

gem 'rails', '3.2.14'

# Bundle edge Rails instead:
# gem 'rails', :git => 'git://github.com/rails/rails.git'


# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'sass-rails',   '~> 3.2.3'
  gem 'coffee-rails', '~> 3.2.1'

  # See https://github.com/sstephenson/execjs#readme for more supported runtimes
  # gem 'therubyracer', :platforms => :ruby

  gem 'uglifier', '>= 1.0.3'
end

gem 'jquery-rails'
gem 'jquery-ui-rails'

# Refinery CMS
gem 'refinerycms', '~> 2.1.0'
gem 'refinerycms-nested_models'
gem 'refinerycms-copywriting'

# Optionally, specify additional Refinery CMS Extensions here:
gem 'refinerycms-acts-as-indexed', '~> 1.0.0'

gem 'mysql2'
gem 'rack-rewrite'
gem 'rack'
gem 'rack-mini-profiler'
gem 'unicorn'
gem 'awesome_nested_set'
gem 'friendly_id'
gem 'thinking-sphinx', '~> 3.1.0'
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
  gem 'rspec-rails'
  # gem 'rb-fsevent', :require => false if RUBY_PLATFORM =~ /darwin/i
  gem 'guard'
  gem 'guard-rails'
  gem 'guard-rspec'
  gem 'guard-spork'
  gem 'guard-bundler', require: false
  gem 'guard-livereload'
  gem 'factory_girl_rails'
  gem 'capybara', '>= 2.4.4'
  gem 'faker'
end

group :assets do
  gem 'autoprefixer-rails'
  gem 'compass-rails', '~> 2.0.0'
  gem 'compass', '~> 1.0.0.alpha.21'
  gem 'susy'
  gem 'breakpoint'
end

gem 'fog', '>= 1.29.0'
gem 'unf'
gem 'lograge'
gem 'shortcode'

# Deployment

gem 'capistrano', '~> 3.4', require: false
gem 'capistrano-rails',   '~> 1.1', require: false
gem 'capistrano-bundler', '~> 1.1', require: false
gem 'capistrano-rvm',   '~> 0.1', require: false
gem 'whenever', :require => false
gem 'capistrano-passenger', '~> 0.2.0', require: false


gem 'pg'

gem 'refinerycms-events', :path => 'vendor/extensions'
gem 'refinerycms-documents', :path => 'vendor/extensions'
gem 'refinerycms-logos', :path => 'vendor/extensions'
