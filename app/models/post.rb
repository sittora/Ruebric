class Post < ApplicationRecord
    has_many :comments, dependent: :destroy
    belongs_to :user
    validates :text_post, presence: true
    
end
