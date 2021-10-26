class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.string :text_post
      t.string :image_url
      t.integer :like
      t.belongs_to :user

      t.timestamps
    end
  end
end
