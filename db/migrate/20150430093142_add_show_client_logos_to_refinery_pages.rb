class AddShowClientLogosToRefineryPages < ActiveRecord::Migration
  def change
    add_column :refinery_pages, :show_client_logos, :boolean
  end
end
