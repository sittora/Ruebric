class FriendListsController < ApplicationController
    def index
        render json: FriendList.all, status: :ok
    end
end
