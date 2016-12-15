class Api::LikesController < ApplicationController
  def create

  end

  def destroy

  end

  private
  def likes_params
    params.require(:like).permit(:photo_id, :user_id)
  end
end
