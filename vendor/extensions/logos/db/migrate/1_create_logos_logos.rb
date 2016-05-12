class CreateLogosLogos < ActiveRecord::Migration

  def up
    create_table :refinery_logos do |t|
      t.string :title
      t.string :url
      t.integer :client_logo_id
      t.integer :position

      t.timestamps
    end

  end

  def down
    if defined?(::Refinery::UserPlugin)
      ::Refinery::UserPlugin.destroy_all({:name => "refinerycms-logos"})
    end

    if defined?(::Refinery::Page)
      ::Refinery::Page.delete_all({:link_url => "/logos/logos"})
    end

    drop_table :refinery_logos

  end

end
