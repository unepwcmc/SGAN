
FactoryGirl.define do
  factory :category, :class => Refinery::Documents::Category do
    sequence(:title) { |n| "refinery#{n}" }
  end
end

