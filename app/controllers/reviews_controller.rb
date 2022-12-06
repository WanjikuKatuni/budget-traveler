class ReviewsController < ApplicationController

    # GET/reviews

    def index
        reviews = Review.all
        render json: reviews, include: ["user", "destination"]
       
    end

    # GET/ reviews/:id
    def show
        review = Review.find(params[:id])
        if review
            render json: review, include: ["user", "destination"]
        else
            render json: {error: "Review not found"}, status: :not_found
        end
    end

    # POST /reviews
    def create
        review = Review.create!(review_params)
        render json: review, status: :created
    rescue ActiveRecord::RecordInvalid => invalid
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end


    # DETETE /reviews/:id
    def destroy
        review = Review.find_by(id: params[:id])
        if review
            review.destroy
            # head :no_content
            render json: {}
        else
            render json: {error: "Review not found"}, status: :not_found
        end
    end



    private
    

    def review_params
        params.permit(:rating, :comment)
    end
end
