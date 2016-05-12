class AddAdviceAndResourceToRefineryPages < ActiveRecord::Migration
  def change
    add_column :refinery_pages, :advice_section, :text
    add_column :refinery_pages, :resource_section, :text
  end
end
