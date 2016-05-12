class AddResourceToRefineryEvents < ActiveRecord::Migration
  def change
    add_column :refinery_events, :file_id, :integer
  end
end
