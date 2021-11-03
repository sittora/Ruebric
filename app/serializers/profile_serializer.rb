class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :preferences, :profile_url, :email
end
