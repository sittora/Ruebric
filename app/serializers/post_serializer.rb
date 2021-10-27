class PostSerializer < ActiveModel::Serializer
  attributes :id, :text_post, :image_url, :like

  has_many :comments
end
