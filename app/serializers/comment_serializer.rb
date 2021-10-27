class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment_text, :image_url, :like, :comments_author
end
