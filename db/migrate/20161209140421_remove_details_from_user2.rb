class RemoveDetailsFromUser2 < ActiveRecord::Migration[5.0]
  def change
    remove_attachment :users, :profile_picture
  end
end
