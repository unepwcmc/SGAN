class RemoveSectionTwoFromRefineryPages < ActiveRecord::Migration
  def change
    remove_column :refinery_pages, :section_two
  end
end
