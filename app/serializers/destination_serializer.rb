class DestinationSerializer < ActiveModel::Serializer
  attributes :id, :destination_name, :location, :cost, :description, :poster_url, :likes

  has_many :reviews
end
