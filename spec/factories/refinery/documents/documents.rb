FactoryGirl.define do

  factory :document, class: Refinery::Documents::Document do |f|
    f.title { Faker::Name.title }
    f.description { Faker::Lorem.paragraph }
  end

end