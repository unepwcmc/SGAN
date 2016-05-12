module Refinery
  module Documents
    describe Category do

      context 'when validations run' do
        it 'has a valid factory' do
          expect(create(:category)).to be_valid
        end

        it 'is invalid without title' do
          expect(build(:category, title: nil)).to_not be_valid
        end

        it 'is invalid without description' do
          expect(build(:category, description: nil)).to_not be_valid
        end
      end

    end
  end
end