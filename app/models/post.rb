class Post < ApplicationRecord
    has_many :comments, dependant: :destroy
    belongs_to :profile
end
