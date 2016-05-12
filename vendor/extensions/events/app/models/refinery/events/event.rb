module Refinery
  module Events
    class Event < Refinery::Core::BaseModel
      self.table_name = 'refinery_events'

      attr_accessible :title, :description, :start_date, :location, :position, :file_id, :end_date

      after_save :set_tbc

      validates :title, presence: true
      validates :description, presence: true

      validates_each :start_date do |record, attr, value|
        if value.present?
          record.errors.add(attr, 'cannot be in the past') unless value > Date.today
        end
      end

      default_scope { order('start_date ASC') }

      belongs_to :file, :class_name=>'Resource'

      def self.upcoming_events
        where("end_date >= ? OR tbc = ?", Date.today, true)
      end

      def set_tbc
        self.update_column(:tbc, true) unless self.start_date || self.end_date
      end

    end
  end
end
