class Api::PhotosController < ApplicationController
  def index
    @photos = []
    @photos = Photo.where(user_id: params[:user_id])
    render :index
  end

  def feed
    @user = current_user

    # only show feed for currently logged in user
    if @user.id != (feed_params[:user_id]).to_i # TODO: Use feed_params
      render json: {}, status: 404
      return
    end

    # TODO: Get all followers and self
    # merge all photos from this group
    # Get x photos
    @photos = []
    @photos = Photo.where(user_id: feed_params[:user_id])
    render :index
  end

  def show
    @photo = Photo.find(params[:id])
    render :show
  end

  def create
    @photo = Photo.new(photo_params)

    if @photo.save
      render "api/photos/show"
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  private
  def photo_params
    params.require(:photo).permit(:picture, :user_id, :description)
  end

  def feed_params
    params.require(:feed).permit(:user_id, :startTime, :amount)
  end
end
