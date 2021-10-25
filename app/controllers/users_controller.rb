class UsersController < ApplicationController
rescue_from ActiveRecord::RecordInvalid

    def create
        user = User.create!(user_params)
        render json: user, status: :created
      rescue ActiveRecord::RecordInvalid => invalid
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
      end

   private

   def user_params
    params.permit(:name, :password)
   end

end
