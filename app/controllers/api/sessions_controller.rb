class Api::SessionsController < ApplicationController

  def create
    @user = User.find_with_credentials(params[:session][:username], params[:session][:password])
    if @user
      log_in!(@user)
      render json: @user
    else
      render json: ["Invalid credentials"], status: 422
    end
  end

  def destroy
    @user = current_user
    if @user
      log_out!
      render json: @user
    else
      render json: @user.errors.full_messages, status: 404
    end

  end
end
