class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :comment

  belongs_to :user, serializer: ReviewUserSerializer
  belongs_to :destination, serializer: ReviewDestinationSerializer
end
