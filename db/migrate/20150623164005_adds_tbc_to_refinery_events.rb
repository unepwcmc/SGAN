class AddsTbcToRefineryEvents < ActiveRecord::Migration
 def change
   add_column :refinery_events, :tbc, :bool
 end
end
