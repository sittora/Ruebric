class UsersController < ApplicationController

    def index
      render json: User.all, status: :ok
    end
    def show
      if current_user
        render json: current_user, status: :ok
      else
        render json: {error: "No active session"}, status: :unauthorized
      end
    end
    def create
       
        user = User.create!(user_params)
        if user.valid?
          session[:user_id] = user.id
          render json: user, status: :created
        else
          render json: user.errors, status: :unprocessable_entity
        end
        
    end
    def destroy
      if current_user
        session.delete(:user_id)
      else
        render json: {error: "no active session"}, status: :unprocessable_entity
      end
    end

    def search
      user = User.find_by(id: params[:id])
      if user
        render json: user, include: ['posts','posts.comments', 'profile'] ,status: :ok
      else 
        render json: {error: "no active user"}, status: 404
      end
    end

    def follow
      @user = User.find(params[:id])
      current_user.followees << @user
      redirect_back(fallback_location: user_path(@user))
    end
    
    def unfollow
      @user = User.find(params[:id])
      current_user.followed_users.find_by(followee_id: @user.id).destroy
      redirect_back(fallback_location: user_path(@user))
    end

   private

   def user_params
    params.permit(:user_name, :password, :password_confirmation)
   end

end
