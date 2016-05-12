class RenameColumnsAdviceAndResourceSection < ActiveRecord::Migration
  def change
    rename_column :refinery_pages, :advice_section, :footer_section_left
    rename_column :refinery_pages, :resource_section, :footer_section_right
  end
end
