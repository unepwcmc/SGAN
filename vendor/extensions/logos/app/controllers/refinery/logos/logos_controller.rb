module Refinery
  module Logos
    class LogosController < ::ApplicationController

      before_filter :find_all_logos
      before_filter :find_page

      def index
        # you can use meta fields from your model instead (e.g. browser_title)
        # by swapping @page for @logo in the line below:
        present(@page)
      end

      def show
        @logo = Logo.find(params[:id])

        # you can use meta fields from your model instead (e.g. browser_title)
        # by swapping @page for @logo in the line below:
        present(@page)
      end

    protected

      def find_all_logos
        @logos = Logo.order('position ASC')
      end

      def find_page
        @page = ::Refinery::Page.where(:link_url => "/logos").first
      end

    end
  end
end
