Refinery::PagesController.class_eval do

  before_filter :upcoming_events, only: [:home]
  before_filter :latest_documents, only: [:home]
  before_filter :client_logos

  def upcoming_events
    @events = Refinery::Events::Event.upcoming_events.limit(3)
  end

  def latest_documents
    @documents = Refinery::Documents::Document.limit(5).order("created_at DESC")
  end

  protected

  def client_logos
    @logos = Refinery::Logos::Logo.order("position")
  end

end