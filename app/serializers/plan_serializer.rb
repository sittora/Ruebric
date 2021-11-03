class PlanSerializer < ActiveModel::Serializer
  attributes :id, :date, :start_time, :end_time, :location

  has_many :activities
end
