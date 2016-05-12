class AddMissingFieldsToDocumentsCategory < ActiveRecord::Migration
  def change
    add_column :refinery_documents_categories, :lft, :integer
    add_column :refinery_documents_categories, :rgt, :integer
    add_column :refinery_documents_categories, :depth, :integer
  end
end
