class CreateProfiles < ActiveRecord::Migration[6.1]
  def change
    create_table :profiles do |t|
      t.string :nick_name
      t.string :name
      t.integer :birthday
      t.string :address
      t.string :occupation
      t.string :bio
      t.belongs_to :user

      t.timestamps
    end
  end
end
