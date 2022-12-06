class UserSerializer < ActiveModel::Serializer
  attributes :id, :user_name

  has_many :destinations 
  has_many :reviews
end
