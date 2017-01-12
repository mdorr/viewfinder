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
      @photos += usr.photos.select do |p|
        feed_params[:max_id].to_i == 0 || p.id < feed_params[:max_id].to_i
      end
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

  def search
    @all_photos = Photo.all.to_a
    @photos = []

    @photos += @all_photos.select do |p|
      p.keyword_names.any? { |kw| kw.downcase.include? search_params[:term].downcase }
    end

    @photos += @all_photos.select do |p|
      p.description.downcase.include? search_params[:term].downcase
    end

    @photos.uniq!

    render :feed
  end

  private
  def photo_params
    params.require(:photo).permit(:picture, :user_id, :description, keyword_names: [])
  end

  def feed_params
    params.require(:feed).permit(:user_id, :max_id, :amount)
  end

  def search_params
    params.require(:search).permit(:term)
  end
end
