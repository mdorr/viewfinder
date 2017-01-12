class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_create_params)
    @user.username = @user.username.downcase
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

  def search
    @users = []
    @users = User.all
    render :search
  end

  def update
    @user = User.find(user_update_params[:id])
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
    params.require(:user).permit(:id, :firstname, :lastname, :city, :country, :description, :cover_image, :profile_picture)
  end

  def search_params
    params.require(:search).permit(:term)
  end
end
