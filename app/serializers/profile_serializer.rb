class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :nick_name, :name, :birthday, :address, :occupation, :bio
end
