class DestinationsController < ApplicationController

    
    # GET /destinations
    def index
        destinations = Destination.all
        render json: destinations
    end

    # GET /destinations/:id
    def show
        destination = Destination.find_by(id: params[:id])
        if destination
            render json: destination
        else
            render json: {error: "Budget-destination not found"}, status: :not_found
        end
    end
end
