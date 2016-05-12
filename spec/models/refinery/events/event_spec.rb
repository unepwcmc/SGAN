module Refinery
  module Events
    describe Event do

      context 'when validations run' do
        it 'has a valid factory' do
          expect(create(:event)).to be_valid
        end

        it 'is invalid without a title' do
          expect(build(:event, title: nil)).to_not be_valid
        end

        it 'is invalid without a description' do
          expect(build(:event, description: nil)).to_not be_valid
        end

        it 'is invalid without a start time' do
          expect(build(:event, start_date: nil)).to_not be_valid
        end

        it 'is invalid with a start date in the past' do
          expect(build(:event, start_date:2.days.ago)).to_not be_valid
        end
      end

      context 'when showing all events' do
        it 'it orders by start_date ascending' do
          event_one = create(:event, start_date: 3.days.from_now)
          event_two = create(:event, start_date: 5.days.from_now)
          event_three = create(:event, start_date: 1.days.from_now)

          expect(Refinery::Events::Event.all).to eq([event_three, event_one, event_two])
        end
      end

    end
  end
end