module ApplicationHelper

  def output_event_dates(event)
    formatted_start = sgan_date_formatter(event.start_date)
    if event.end_date.present? && event.start_date != event.end_date
      # 2 date option
      formatted_end = sgan_date_formatter(event.end_date)
      course_dates = "#{formatted_start} - #{formatted_end}"
      course_dates
    else
      # 1 date option
      course_date = "#{formatted_start}"
      course_date
    end
  end

  def background_image(image, dimensions=nil)
    return unless image
    dimensions.present?? image.thumbnail(dimensions).url : image.url
  end

  def meta_prepare(content) 
    strip_tags(content.to_s).truncate(50)
  end

  def sgan_date_formatter(date)
    date.strftime("#{date.day.ordinalize} %b %Y")
  end

  def output_term_associations()
    categories = Refinery::Documents::Category.where('depth = 0').order(:title)
    render partial: 'category', collection: categories, as: 'category'
  end

  def render_hidden_fields(except)
    params.except(except, :controller, :action, :id, :page, :utf8).collect do |key, value|
      if value.kind_of?(Array)
        value.collect do |v|
          hidden_field_tag "#{key}[]", v
        end
      else
        hidden_field_tag key, value
      end
    end.join("\n").html_safe
  end

  def file_extension(resource)
    File.extname(resource.file_name).last(-1)
  end

  def navigation_menu
    presenter = Refinery::Pages::MenuPresenter.new(refinery_menu_pages, self)
    presenter.css = "primary-nav"
    presenter.menu_tag = :nav
    presenter
  end

  def mobile_navigation_menu
    presenter = Refinery::Pages::MenuPresenter.new(refinery_menu_pages, self)
    presenter.css = "mobile-nav"
    presenter.menu_tag = :nav
    presenter
  end

end
