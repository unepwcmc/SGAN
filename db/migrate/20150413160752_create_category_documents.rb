class CreateCategoryDocuments < ActiveRecord::Migration
  def change
    create_table :category_documents do |t|
      t.integer :category_id
      t.integer :document_id

      t.timestamps
    end
  end
end
