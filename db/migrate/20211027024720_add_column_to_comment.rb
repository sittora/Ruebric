class AddColumnToComment < ActiveRecord::Migration[6.1]
  def change
    add_column :comments, :comments_author, :string
  end
end
