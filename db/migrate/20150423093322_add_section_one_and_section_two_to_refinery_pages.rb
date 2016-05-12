class AddSectionOneAndSectionTwoToRefineryPages < ActiveRecord::Migration
  def change
    add_column :refinery_pages, :section_one, :text
    add_column :refinery_pages, :section_two, :text
  end
end
