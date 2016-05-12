# Encoding: UTF-8

Gem::Specification.new do |s|
  s.platform          = Gem::Platform::RUBY
  s.name              = 'refinerycms-logos'
  s.author            = ['Builtbyclick']
  s.version           = '1.0'
  s.description       = 'Ruby on Rails Logos extension for Refinery CMS'
  s.date              = '2015-04-29'
  s.summary           = 'Logos extension for Refinery CMS'
  s.require_paths     = %w(lib)
  s.files             = Dir["{app,config,db,lib}/**/*"] + ["readme.md"]

  # Runtime dependencies
  s.add_dependency             'refinerycms-core',    '~> 2.1.3'

  # Development dependencies (usually used for testing)
  s.add_development_dependency 'refinerycms-testing', '~> 2.1.3'
end
