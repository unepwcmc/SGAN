source 'https://rubygems.org'

gem 'rails', '7.0.8.1'

# Bundle edge Rails instead:
# gem 'rails', :git => 'git://github.com/rails/rails.git'


# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'sass-rails', '~> 5.0.8'
  gem 'coffee-rails', '~> 4.2.2'

  # See https://github.com/sstephenson/execjs#readme for more supported runtimes
  # gem 'therubyracer', :platforms => :ruby

  gem 'uglifier', '>= 1.0.3'
end

gem 'jquery-rails', '>= 4.0.1'
gem 'jquery-ui-rails', '>= 4.2.0'

# Refinery CMS
gem 'refinerycms', '~> 4.0.0'
gem 'refinerycms-nested_models', '>= 0.1.0'
gem 'refinerycms-copywriting'

# Optionally, specify additional Refinery CMS Extensions here:
gem 'refinerycms-acts-as-indexed', '~> 3.0.0'

gem 'mysql2'
gem 'rack-rewrite'
gem 'rack', '>= 2.2.8.1'
gem 'rack-mini-profiler', '>= 0.9.4'
gem 'unicorn', '>= 5.0.0'
gem 'awesome_nested_set'
gem 'friendly_id'
gem 'thinking-sphinx', '~> 3.1.0'
gem 'will_paginate', '~> 3.0'

group :test do
  #gem 'refinerycms-testing'
end 

group :development do
  gem 'better_errors', '>= 2.2.0'
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
  gem 'guard-livereload'
  gem 'factory_girl_rails', '>= 4.6.0'
  gem 'capybara', '>= 2.5.0'
  gem 'faker'
end

group :assets do
  gem 'autoprefixer-rails'
  gem 'compass-rails', '~> 3.0.0'
  gem 'compass', '~> 1.0.0.alpha.21'
  gem 'susy'
  gem 'breakpoint'
end

gem 'fog', '>= 1.30.0'
gem 'unf'
gem 'lograge', '>= 0.3.2'
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
