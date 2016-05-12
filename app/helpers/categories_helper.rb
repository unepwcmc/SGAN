module CategoriesHelper

  def link_to_category(category, selected_category)
    classes = ['category-link']
    classes << ['selected'] if selected_category && category.id == selected_category.id

    link_to category.title, refinery.documents_category_path(category), class: classes.join(' ')
  end

  def categories_title( title, category )
    category.nil?? title : "#{title}: #{category.title}"
  end

end