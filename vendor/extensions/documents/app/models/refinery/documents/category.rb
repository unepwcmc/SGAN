module Refinery
  module Documents
    class Category < Refinery::Core::BaseModel

      attr_accessible :title, :description, :parent_id, :sub_category_position, :position

      has_many :categories_documents, class_name: '::Refinery::Documents::CategoryDocument', foreign_key: :category_id, dependent: :destroy
      has_many :documents, class_name: '::Refinery::Documents::Document', through: :categories_documents, order: 'created_at DESC'

      validates :title, :presence => true, :uniqueness => true

      default_scope { order('lft ASC') }

      acts_as_nested_set

      acts_as_indexed :fields => [:title]

      extend FriendlyId
      friendly_id :title, use: [:slugged, :history]

      class << self
        def children_of(parent_id)
          where(parent_id: parent_id).order(:lft)
        end
      end

    end
  end
end
