module Refinery
  module Events
    class EventsController < ::ApplicationController
      before_filter :find_all_events
      before_filter :find_page

      def index
        # you can use meta fields from your model instead (e.g. browser_title)
        # by swapping @page for @event in the line below:
        present(@page)
      end

      def show
        @event = Event.find(params[:id])
        present(@page)
        respond_attachment(@event)
      end

    protected

      def find_all_events
        @events = Event.upcoming_events
      end

      def find_page
        @page = ::Refinery::Page.where(:link_url => "/events").first
      end

    end
  end
end
