module Refinery
  module Documents
    describe Document do

      context 'When validations run' do
        it 'has a valid factory' do
          expect(create(:document)).to be_valid
        end

        it 'is invalid without a title' do
          expect(build(:document, title: nil)).to_not be_valid
        end

        it 'is invalid without a description' do
          expect(build(:document, description: nil)).to_not be_valid
        end
      end

    end
  end
end