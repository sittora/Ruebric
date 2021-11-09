class PlansController < ApplicationController
    before_action :get_plan, only: [:show, :update, :destroy]

    def index
        if current_user 
            render json: current_user.plans, status: :ok
        end

    end

    def create
        plan = Plan.new(plan_params)
        if plan.valid?
            plan.save
            render json: plan, status: :created
            # redirect_to plan_path, params: plan.id
         else
            render :new
         end
        # 
        # redirect_to plan_path(plan)

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

    def show
        if @plan
            # render json: @plan
            render json: @plan.to_json(except: [:created_at, :updated_at], include: [:activities])
        else
          render json: { error: "Plan not found" }, status: :not_found
        end
    end

    private 
    def get_plan
        @plan = Plan.find_by(id: params[:id])
    end

    def plan_params
        params.permit(:date, :start_time, :end_time, :location, :user_id, :id)
    end
end
