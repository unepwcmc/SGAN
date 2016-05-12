module Refinery
  module Documents
    class CategoriesController < ::ApplicationController

      before_filter :find_page
      before_filter :find_categories, only: [:show]

      def show
        @category = Category.includes( :documents ).find( params[:id] )

        present(@page)
      end

      protected

      def find_page
        @page = ::Refinery::Page.find( 6 )
      end

      def find_categories
        @categories = Refinery::Documents::Category.where(depth: 0).order('lft ASC')
      end

    end
  end
end