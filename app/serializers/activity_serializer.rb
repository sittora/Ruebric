class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :start_time, :end_time, :description, :activities_author
end
