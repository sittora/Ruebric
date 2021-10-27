class PostsController < ApplicationController
    
    def index
        
        if current_user
            
            render json: current_user.posts, status: :ok
        end

    end

    def create
        post = Post.create(post_params)
        render json: post, status: :created

    end

    def update
        
        post = Post.find_by(id: params[:id])
        if post
            post.update(post_params)
        else
            render json: {error: "No post found"}, status: :not_found
        end
    end
    def destroy
        post = Post.find_by(id: params[:id])
        if post.user_id == current_user.id
            post.destroy
        else
            render json: {error: "You're not allowed to delete this post"}, status: :unprocessable_entity
        end
    end

    private 
    def post_params
        params.permit(:text_post, :image_url, :like, :user_id, :id)
    end
end
