class RemoveDetailsFromUSer < ActiveRecord::Migration[5.0]
  def change
    def self.down
      remove_attachment :users, :profile_picture
    end
  end
end
