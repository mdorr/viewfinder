class Api::SessionsController < ApplicationController

  def create
    @user = User.find_with_credentials(params[:user][:username], params[:user][:password])
    if @user
      log_in!(@user)
      render json: @user
    else
      render json: ["Invalid credentials"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      log_out!
      render "api/users/show"
    else
      render json: ['No user signed in.'], status: 404
    end

  end
end
