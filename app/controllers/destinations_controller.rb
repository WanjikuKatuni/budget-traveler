class DestinationsController < ApplicationController

    
    # GET /destinations
    def index
        destinations = Destination.all
        render json: destinations
    end
end
