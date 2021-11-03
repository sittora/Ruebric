class CreateProfiles < ActiveRecord::Migration[6.1]
  def change
    create_table :profiles do |t|
      t.string :name
      t.string :location
      t.string :preferences
      t.belongs_to :user

      t.timestamps
    end
  end
end
