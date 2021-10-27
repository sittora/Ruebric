class CommentsController < ApplicationController
    
    def create
        c = Comment.create(comment_params)
        render json: c.to_json(except: [:created_at, :updated_at]), status: :created
    end
    
    def destroy
        c= Comment.find_by(id: params[:id])
        c.destroy
        render json: {}, status: :ok
    end
    
    def update
        
        c =Comment.find_by(id: params[:id])
        c.update(comment_params)
        render json: c, status: :ok
    end
    private
    def comment_params
        params.permit(:comment_text, :image_url, :like, :post_id, :user_id, :comments_author, :id)
    end
end
