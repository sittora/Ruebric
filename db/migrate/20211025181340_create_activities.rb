class CreateActivities < ActiveRecord::Migration[6.1]
  def change
    create_table :activities do |t|
      t.string :name
      t.string :address
      t.integer :start_time
      t.integer :end_time
      t.string :description
      t.belongs_to :plan
      t.belongs_to :user 

      t.timestamps
    end
  end
end
