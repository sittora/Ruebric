class User < ApplicationRecord
    has_one :profile
    validates: :user_name, presence: true, uniqueness: true
    validates: :password, presence: true

end
