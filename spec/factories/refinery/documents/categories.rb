FactoryGirl.define do

  factory :category, class: Refinery::Documents::Category do |f|
    f.title { Faker::Name.title }
    f.description { Faker::Lorem.paragraph }
  end

end