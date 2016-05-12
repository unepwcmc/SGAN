module Refinery
  module Documents
    class Engine < Rails::Engine
      extend Refinery::Engine
      isolate_namespace Refinery::Documents

      engine_name :refinery_documents

      before_inclusion do
        Refinery::Plugin.register do |plugin|
          plugin.name = "categories"
          plugin.url = proc { Refinery::Core::Engine.routes.url_helpers.documents_admin_categories_path }
          plugin.pathname = root
          plugin.activity = {
            :class_name => :'refinery/documents/category'
          }
          plugin.menu_match = %r{refinery/documents/categories(/.*)?$}
        end
      end

      config.after_initialize do
        Refinery.register_extension(Refinery::Categories)
      end
    end
  end
end
