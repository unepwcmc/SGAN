FactoryGirl.define do

  factory :event, class: Refinery::Events::Event do |f|
    f.title { Faker::Name.title }
    f.description { Faker::Lorem.paragraph }
    f.start_date { Faker::Date.forward(23) }
    f.location { Faker::Address.city }
  end

end