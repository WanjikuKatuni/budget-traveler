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

    # POST
    def create
        destination = Destination.create(destination_params)
        render json: destination, status: :created
    end

    # PATCH /destinations/:id
    def update
        destination = Destination.find_by(id: params[:id])
        if destination
            destination.update(destination_params)
            render json: destination
        else
            render json: {error: "Budget destination not found"}, status: :not_found
        end
    end

    def destroy
        destination = Destination.find_by(id: params[:id])
        if destination
            destination.destroy
            # head :no_content
            render json: {}
        else
            render json: {error: "Budget-destination not found"}, status: :not_found
        end
    end







    
    def increment_likes
        destination = Destination.find_by(id: params[:id])
        if destination
            destination.update(likes: destination.likes + 1)
            render json: destination
        else
            render json: {error: "Budget-destination not found"}, status: :not_found
        end
    end

   


    private

    def destination_params
        params.permit(:destination_name, :location, :cost, :description, :poster_url, :likes)
    end
end
