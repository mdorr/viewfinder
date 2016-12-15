class Api::LikesController < ApplicationController
  def show
    @like = Like.find_by(like_params)

    render :show, locals: {
      id: like_params[:photo_id],
      liked: @like != nil,
      num_likes: num_likes(like_params[:photo_id])
    }

  end

  def create
    sleep(1)
    @like = Like.new(like_params)

    if current_user.id == @like.user_id && @like.save
      render :show, locals: {
        id: like_params[:photo_id],
        liked: true,
        num_likes: num_likes(like_params[:photo_id])
      }, status: 200
    else
      render :show, locals: {
        id: like_params[:photo_id],
        liked: false,
        num_likes: num_likes(like_params[:photo_id])
      }, status: 422
    end
  end

  def destroy
    sleep(1)
    @like = Like.find_by(like_params)

    if @like && current_user.id == @like.user_id
      @like.destroy
        render :show, locals: {
          id: like_params[:photo_id],
          liked: false,
          num_likes: num_likes(like_params[:photo_id])
        }, status: 200
    else
      render :show, locals: {
        id: like_params[:photo_id],
        liked: true,
        num_likes: num_likes(like_params[:photo_id])
      }, status: 422
    end
  end

  private
  def num_likes(id)
    photo = Photo.find(like_params[:photo_id])
    return photo ? photo.likes.count : 0
  end

  def like_params
    params.require(:like).permit(:photo_id, :user_id)
  end
end
