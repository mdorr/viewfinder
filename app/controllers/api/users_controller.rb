class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_create_params)
    if @user.save
      log_in!(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    if @user
      render :show
    else
      render json: {}, status: 422
    end
  end

  def update
    @user = User.find(params[:id])
    if @user == current_user && @user.update(user_update_params)
      render :show
    else
      render @user.errors.full_messages, status: 422
    end
  end

  private
  def user_create_params
    params.require(:user).permit(:username, :password)
  end

  def user_update_params
    params.require(:user).permit(:firstname, :lastname, :city, :country, :description, :cover_image, :profile_picture)
  end
end
