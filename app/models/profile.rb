class Profile < ApplicationRecord
    belongs_to :user 
    has_many :posts
    has_many :comments, through: :posts 
    has_many :friends_list
end
