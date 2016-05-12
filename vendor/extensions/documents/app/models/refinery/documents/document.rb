module Refinery
  module Documents
    class Document < Refinery::Core::BaseModel

      self.table_name = 'refinery_documents'

      default_scope order('created_at DESC')

      attr_accessible :title, :description, :file_id, :position, :category_ids, :category_count

      validates :title, presence: true
      validates :description, presence: true

      belongs_to :file, class_name: 'Refinery::Resource'

      has_many :categories_documents, class_name: '::Refinery::Documents::CategoryDocument', foreign_key: :document_id, dependent: :destroy
      has_many :categories, class_name: '::Refinery::Documents::Category', through: :categories_documents

      acts_as_indexed :fields => [:title]

      extend FriendlyId
      friendly_id :title, use: [:slugged, :history]

    end
  end
end
