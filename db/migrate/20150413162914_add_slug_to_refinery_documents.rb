class AddSlugToRefineryDocuments < ActiveRecord::Migration
  def change
    add_column :refinery_documents, :slug, :string
    add_index :refinery_documents, :slug, :unique => true
  end
end
