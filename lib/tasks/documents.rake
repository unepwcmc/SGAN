namespace :change_page do
  desc "Change document page to Resource"
  task :documents => :environment do
    document = Refinery::Page.find(5)
    document.slug = "resources"
    document.link_url = "/resources"
    document.title = "Resources"
    document.menu_match = "^/resources(/|/.+?|)$"
    document.menu_title = "Resources"
    document.save
  end

  desc "Change category page"
  task :categories => :environment do
    category = Refinery::Page.find(6)
    category.link_url = "/categories"
    category.save
  end
end