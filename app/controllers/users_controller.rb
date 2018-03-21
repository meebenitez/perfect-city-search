class UsersController < ApplicationController


def check_for_user
    @user = current_user
    render json: @user, status: 200
end

end
