class PlansController < ApplicationController
    
    def index
        
        if current_user 
            render json: current_user.plans, status: :ok
        end

    end

    def create
        plan = Plan.create(plan_params)
        render json: plan, status: :created

    end

    def update
        
        plan = Plan.find_by(id: params[:id])
        if plan
            plan.update(plan_params)
        else
            render json: {error: "No plan found"}, status: :not_found
        end
    end
    def destroy
        plan = Plan.find_by(id: params[:id])
        if plan.user_id == current_user.id
            plan.destroy
        else
            render json: {error: "You're not allowed to delete this plan"}, status: :unprocessable_entity
        end
    end

    private 
    def plan_params
        params.permit(:date, :start_time, :end_time, :location, :user_id, :id)
    end
end
