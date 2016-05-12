module Refinery
  module Documents
    module Admin
      class DocumentsController < ::Refinery::AdminController

        before_filter :set_category_id_default, :only => [:create, :update]

        crudify :'refinery/documents/document',
                :xhr_paging => true,
                :order => "title ASC",
                :sortable => false

        protected

        def set_category_id_default
          params[:document][:category_ids] ||= []
        end

      end
    end
  end
end
