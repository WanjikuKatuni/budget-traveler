class Review < ApplicationRecord
  belongs_to :destination
  belongs_to :user

  validates :rating, presence: true
  validates :comment, length:{minimum: 2}

end
