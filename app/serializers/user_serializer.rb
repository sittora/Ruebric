class UserSerializer < ActiveModel::Serializer
  attributes :id, :user_name, :password
  has_one :profile
end
