class CreateUserDetails < ActiveRecord::Migration[5.0]
  def change
    create_table :user_details do |t|
      t.integer     :user_id, null: false
      t.string      :firstname
      t.string      :lastname
      t.string      :city
      t.string      :country
      t.attachment  :profile_picture
      t.attachment  :cover_image

      t.timestamps
    end
    add_index :user_details, :user_id
  end
end
