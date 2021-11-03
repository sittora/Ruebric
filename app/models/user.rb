class User < ApplicationRecord
    has_one :profile, dependent: :destroy
    has_many :plans, dependent: :destroy
    has_many :activities, through: :plans
    validates :user_name, presence: true, uniqueness: true
    validates :password, presence: true
    has_secure_password
end
