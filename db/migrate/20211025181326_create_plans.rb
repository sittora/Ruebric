class CreatePlans < ActiveRecord::Migration[6.1]
  def change
    create_table :plans do |t|
      t.integer :date
      t.integer :start_time
      t.integer :end_time
      t.string :location
      t.belongs_to :user

      t.timestamps
    end
  end
end
