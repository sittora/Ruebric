class ProfilesController < ApplicationController
    before_action :get_profile, only: [:show]
    def index
        profiles = Profile.all
        render json: profiles.to_json(except: [:created_at, :updated_at])
    end

        # GET /profiles/:id
    def show

        if @profile
          render json: @profile.to_json(except: [:created_at, :updated_at])
        else
          render json: { error: "Profile not found" }, status: :not_found
        end
    end

    def create
        profile = Profile.create!(profile_params)
        render json: profile, status: :created
      rescue ActiveRecord::RecordInvalid => invalid
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
      end

      private
      def profile_params
        params.permit(:nick_name, :name, :birthday, :location, :occupation, :bio, :user_id, :email, :profile_url)
      end

      def get_profile
        @profile = Profile.find_by(id: params[:id])
      end
    
end
