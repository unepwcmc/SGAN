module Refinery
  module Documents
    module Admin
      class CategoriesController < ::Refinery::AdminController

        crudify :'refinery/documents/category',
                :order => "lft ASC",
                :include => [:children],
                :paging => false

        def children
          @category = Category.find(params[:id])
          render :layout => false
        end

        private

        def find_all_categories
          @categories = Category.roots.order(:lft)
        end

      end
    end
  end
end
