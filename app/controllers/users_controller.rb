class UsersController < ApplicationController

    # GET /users
    def index
        users = User.all
        render json: users
    end

    # GET users/:id
    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user
        else
            render json: {error: "Not authorized"}, status: :unauthorized
        end

    end
end
