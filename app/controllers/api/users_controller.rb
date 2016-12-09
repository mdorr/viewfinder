class Api::UsersController < ApplicationController
  def create
    @newUser = User.new(user_params)
    if @newUser.save
      log_in!(@newUser)
      render json: @newUser, status: 201
    else
      render json: @newUser.errors.full_messages, status: 422
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
    if @user == current_user && @user.update(user_params)
      render :show
    else
      render @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :firstname, :lastname, :city, :country, :cover_image, :profile_picture, :description)
  end
end
