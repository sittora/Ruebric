class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :nick_name, :name, :birthday, :occupation, :bio, :profile_url, :email, :location
end
