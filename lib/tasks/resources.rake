namespace :resources do

  desc 'Import missing documents to S3'
  task :import => :environment do
    Refinery::Resource.where(['created_at < ?', 2.days.ago]).find_each do |r|
      begin
        r.file_url = "http://builtbyclick.com/sgan/#{URI.escape(r.file_name)}"
        r.save!
      rescue
        p "File not found: #{r.file_name}"
      end
    end
  end

end