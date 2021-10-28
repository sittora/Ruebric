class FriendListSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :friend_id, :profile_id
end
