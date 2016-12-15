class Api::LikesController < ApplicationController
  def show
    @like = Like.find_by(like_params)

    if @like
      render json: @like, status: 200
    else
      render json: { photo_id: like_params[:photo_id]}, status: 200
    end
  end

  def create

    sleep(1)
    @like = Like.new(like_params)

    if current_user.id == @like.user_id && @like.save
      render json: @like, status: 200
    else
      render json: {}, status: 422
    end
  end

  def destroy
    sleep(1)
    @like = Like.find_by(like_params)

    if @like && current_user.id == @like.user_id
      @like.destroy
      render json: @like, status: 200
    else
      render json: {}, status: 422
    end
  end

  private
  def like_params
    params.require(:like).permit(:photo_id, :user_id)
  end
end
