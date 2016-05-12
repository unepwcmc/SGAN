module Refinery
  module Logos
    class Engine < Rails::Engine
      extend Refinery::Engine
      isolate_namespace Refinery::Logos

      engine_name :refinery_logos

      before_inclusion do
        Refinery::Plugin.register do |plugin|
          plugin.name = "logos"
          plugin.url = proc { Refinery::Core::Engine.routes.url_helpers.logos_admin_logos_path }
          plugin.pathname = root
          plugin.activity = {
            :class_name => :'refinery/logos/logo'
          }
          
        end
      end

      config.after_initialize do
        Refinery.register_extension(Refinery::Logos)
      end
    end
  end
end
