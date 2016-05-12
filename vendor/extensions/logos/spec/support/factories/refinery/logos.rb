
FactoryGirl.define do
  factory :logo, :class => Refinery::Logos::Logo do
    sequence(:title) { |n| "refinery#{n}" }
  end
end

