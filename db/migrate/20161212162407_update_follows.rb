class UpdateFollows < ActiveRecord::Migration[5.0]
  def change
    add_index :follows, [:followed_id, :following_id], :unique => true
  end
end
