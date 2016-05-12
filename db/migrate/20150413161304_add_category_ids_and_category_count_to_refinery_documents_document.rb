class AddCategoryIdsAndCategoryCountToRefineryDocumentsDocument < ActiveRecord::Migration
  def change
    add_column :refinery_documents, :category_count, :integer
    add_column :refinery_documents, :category_id, :integer
  end
end
