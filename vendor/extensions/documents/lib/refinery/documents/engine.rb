module Refinery
  module Documents
    class Engine < Rails::Engine
      extend Refinery::Engine
      isolate_namespace Refinery::Documents

      engine_name :refinery_documents

      before_inclusion do
        Refinery::Plugin.register do |plugin|
          plugin.name = "documents"
          plugin.url = proc { Refinery::Core::Engine.routes.url_helpers.documents_admin_documents_path }
          plugin.pathname = root
          plugin.activity = {
            :class_name => :'refinery/documents/document'
          }
          
        end
      end

      config.after_initialize do
        Refinery.register_extension(Refinery::Documents)
      end
    end
  end
end
