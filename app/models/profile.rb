class Profile < ApplicationRecord
    belongs_to :user 
    has_many :friend_lists
    
    
end
