class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.string :comment_text
      t.string :image_url
      t.integer :like
      t.belongs_to :post
      t.belongs_to :user 

      t.timestamps
    end
  end
end
