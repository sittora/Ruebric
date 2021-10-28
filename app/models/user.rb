class User < ApplicationRecord
    has_one :profile, dependent: :destroy
    has_many :posts, dependent: :destroy
    has_many :comments, through: :posts
    has_many :friend_lists
    has_many :followed_users, foreign_key: :follower_id, class_name: 'Follow'
    has_many :followees, through: :followed_users
    has_many :following_users, foreign_key: :followee_id, class_name: 'Follow'
    has_many :followers, through: :following_users
    validates :user_name, presence: true, uniqueness: true
    validates :password, presence: true
    has_secure_password
end
