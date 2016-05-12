class AddSlugToRefineryDocumentsCategories < ActiveRecord::Migration
  def change
    add_column :refinery_documents_categories, :slug, :string
  end
end
