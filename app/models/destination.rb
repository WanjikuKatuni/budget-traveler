class Destination < ApplicationRecord

    belongs_to :user
    has_many :reviews
    



    # validates :destination_name, presence: true
    # validates :location, presence: true
    # validates :cost, presence: true
    # validates :description, presence: true
    # validates :poster_url, presence: true

    # validates :description, length: {minimum: 20}

end
