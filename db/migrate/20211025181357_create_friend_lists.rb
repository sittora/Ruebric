class CreateFriendLists < ActiveRecord::Migration[6.1]
  def change
    create_table :friend_lists do |t|
      t.integer :user_id
      t.integer :friend_id
      t.belongs_to :profile

      t.timestamps
    end
  end
end
