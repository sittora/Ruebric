class SessionsController < ApplicationController

    def create
      
        user = User.find_by(user_name: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id]= user.id
            render json: user, status: :ok
        else
            render json: { error: "Invalid credentials"}, status: :unauthorized
        end
    end

    def destroy
        if current_user
            session.delete :user_id
        else
            render json: { error: "No active user"}, status: :unprocessable_entity
        end
    end
end
