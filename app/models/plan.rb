class Plan < ApplicationRecord
    has_many :activities, dependent: :destroy
    belongs_to :user
    validates :date, presence: true
    
end
