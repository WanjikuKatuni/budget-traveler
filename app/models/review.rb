class Review < ApplicationRecord
  belongs_to :destination
  belongs_to :user

  # validates :rating, presence: true


end
