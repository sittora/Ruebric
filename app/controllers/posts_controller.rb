class PostsController < ApplicationController
    


    def create
        post = Post.create(post_params)
        render json: post, status: :created

    end


    private 
    def post_params
        params.permit(:text_post, :image_url, :like, :user_id)
    end
end
