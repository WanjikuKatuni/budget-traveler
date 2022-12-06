# class LikesController < ApplicationController
    
#     def increment_likes
#         destination = Destination.find_by(id: params[:id])
#         if destination
#             destination.update(likes: destination.likes + 1)
#             render json: destination
#         else
#             render json: {error: "Budget-destination not found"}, status: :not_found
#         end
#     end
# end
