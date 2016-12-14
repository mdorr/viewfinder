class Api::FollowsController < ApplicationController

  def create
    @follow = Follow.new(follower: User.find_by(id: follows_params[:following_user_id]), followed_user: User.find_by(id: follows_params[:followed_user_id]))

    if @follow.save
      @user = current_user
      render "api/users/show"
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = Follow.find_by(
      followed_id: follows_params[:followed_user_id],
      following_id: follows_params[:following_user_id]
    )

    if @follow && @follow.follower == current_user
      @follow.destroy

      @user = current_user # Needs to be fetched separately here, otherwise the results of @follow.destroy might not show yet due to caching
      render "api/users/show"
    else
      render json: ['Invalid follow id.'], status: 404
    end
  end

  private
  def follows_params
    params.require(:follow).permit(:followed_user_id, :following_user_id)
  end
end
