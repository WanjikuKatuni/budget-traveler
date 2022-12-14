class DestinationsController < ApplicationController

    
    # GET /destinations
    def index
        destinations = Destination.all
        render json: destinations, include: ["reviews", "reviews.user"]
    end

    # GET /destinations/:id
    def show
        destination = Destination.find_by(id: params[:id])
        if destination
            render json: destination, include: ["reviews", "reviews.user"]
        else
            render json: {error: "Budget-destination not found"}, status: :not_found
        end
    end

    # POST
    def create
        destination = Destination.create(destination_params)
        render json: destination, status: :created
    # rescue ActiveRecord::RecordInvalid => invalid 
    #     render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity   
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
