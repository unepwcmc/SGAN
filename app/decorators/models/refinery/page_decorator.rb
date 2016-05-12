Refinery::Page.class_eval do
  attr_accessible :background_image_id, :sidebar_title_one, :sidebar_title_two, :sidebar_title_three,
                  :sidebar_description_one, :sidebar_description_two, :sidebar_description_three, :footer_section_left,
                  :footer_section_right, :section_one, :show_client_logos

  belongs_to :background_image, :class_name => '::Refinery::Image'
end