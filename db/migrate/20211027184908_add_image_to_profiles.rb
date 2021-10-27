class AddImageToProfiles < ActiveRecord::Migration[6.1]
  def change
    add_column :profiles, :profile_url, :string
  end
end
