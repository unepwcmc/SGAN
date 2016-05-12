module Refinery
  module Logos
    class Logo < Refinery::Core::BaseModel
      self.table_name = 'refinery_logos'

      attr_accessible :title, :url, :client_logo_id, :position

      validates :title, :presence => true, :uniqueness => true

      belongs_to :client_logo, :class_name => '::Refinery::Image'
    end
  end
end
