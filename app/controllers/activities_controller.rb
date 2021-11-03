class ActivitiesController < ApplicationController
    
    def create
        a = Activity.create(activity_params)
        render json: a.to_json(except: [:created_at, :updated_at]), status: :created
    end
    
    def destroy
        a = Activity.find_by(id: params[:id])
        a.destroy
        render json: {}, status: :ok
    end
    
    def update
        a = Activity.find_by(id: params[:id])
        a.update(activity_params)
        render json: a, status: :ok
    end

    private

    def activity_params
        params.permit(:name, :address, :start_time, :end_time, :description, :plan_id, :user_id, :activities_author, :id)
    end
end
