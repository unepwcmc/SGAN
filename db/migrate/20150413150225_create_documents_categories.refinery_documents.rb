# This migration comes from refinery_documents (originally 2)
class CreateDocumentsCategories < ActiveRecord::Migration

  def up
    create_table :refinery_documents_categories do |t|
      t.string :title
      t.text :description
      t.integer :parent_id
      t.integer :sub_category_position
      t.integer :position

      t.timestamps
    end

  end

  def down
    if defined?(::Refinery::UserPlugin)
      ::Refinery::UserPlugin.destroy_all({:name => "refinerycms-documents"})
    end

    if defined?(::Refinery::Page)
      ::Refinery::Page.delete_all({:link_url => "/documents/categories"})
    end

    drop_table :refinery_documents_categories

  end

end
