class ChangeColumn < ActiveRecord::Migration[6.1]
  def change
    rename_column :profiles, :address, :location
    add_column :profiles, :email, :string
  end
end
