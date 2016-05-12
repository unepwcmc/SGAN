class AddEndDateToRefineryEvents < ActiveRecord::Migration
  def change
    add_column :refinery_events, :end_date, :date
  end
end
