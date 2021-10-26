class User < ApplicationRecord
    has_one :profile
    has_many :posts, through: :profile
    validates :user_name, presence: true, uniqueness: true
    validates :password, presence: true
    has_secure_password
end
