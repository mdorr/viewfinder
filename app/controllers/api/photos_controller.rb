class Api::PhotosController < ApplicationController
  def index
    @photos = []
    @photos = Photo.where(user_id: params[:user_id]).sort{ |a, b| b.created_at <=> a.created_at } # newest first
    render :index
  end

  def feed
    @user = current_user
    # only show feed for currently logged in user
    if @user.id != (feed_params[:user_id]).to_i
      render json: {}, status: 404
      return
    end
    # Get x photos

    @photos = []
    @users_for_feed = [@user] + @user.followed

    @users_for_feed.each do |usr|
      @photos += usr.photos.select { |p| p.created_at < feed_params[:start_time] }

    end
    @photos.sort! { |a, b| b.created_at <=> a.created_at } # newest first
    @photos = @photos.take(feed_params[:amount].to_i)
    render :feed
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
    params.require(:photo).permit(:picture, :user_id, :description, keyword_names: [])
  end

  def feed_params
    params.require(:feed).permit(:user_id, :start_time, :amount)
  end
end
