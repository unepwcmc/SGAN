module Refinery
  module Documents
    class DocumentsController < ::ApplicationController

      before_filter :find_page
      before_filter :find_category
      before_filter :find_document, only: [:show]
      before_filter :find_categories, only: [:index]

      def index
        with = {}
        with[:category_ids] = [@category.id] if @category
        @documents = Document.search( params[:search], with: with, page: params[:page], order: 'created_at DESC', per_page: 10 )

        present(@page)
      end

      def show
        # TODO Refactor this method
        respond_to do |format|
          format.html
          format.pdf {
            send_file @document.file.file.path, type: "application/pdf", disposition: 'inline'
          }
          format.jpg {
            send_file @document.file.file.path, type: "image/jpeg", disposition: 'attachment'
          }
          format.jpeg {
            send_file @document.file.file.path, type: "image/jpeg", disposition: 'attachment'
          }
          format.png {
            send_file @document.file.file.path, type: "image/png", disposition: 'attachment'
          }
          format.docx {
            send_file @document.file.file.path, type: "application/msword", disposition: 'attachment'
          }
        end
      end

      protected

      def find_document
        @document = Document.find_by_slug!(params[:id])
      end

      def find_page
        @page = ::Refinery::Page.find(5)
      end

      def find_category
        @category = Category.find(params[:category_id]) if params[:category_id].present?
      end

      def find_categories
        @categories = Refinery::Documents::Category.where(depth: 0).order('lft ASC')
      end

    end
  end
end