class AddGeneralSidebarToRefineryPages < ActiveRecord::Migration
  def change
    add_column :refinery_pages, :sidebar_title_one, :string
    add_column :refinery_pages, :sidebar_title_two, :string
    add_column :refinery_pages, :sidebar_title_three, :string
    add_column :refinery_pages, :sidebar_description_one, :text
    add_column :refinery_pages, :sidebar_description_two, :text
    add_column :refinery_pages, :sidebar_description_three, :text
  end
end
