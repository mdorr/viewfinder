class UpdateUserWithDetails < ActiveRecord::Migration[5.0]
  def change
    change_table :users do |t|
      t.string      :firstname
      t.string      :lastname
      t.string      :city
      t.string      :country
      t.text        :description
      t.attachment  :profile_picture
      t.attachment  :cover_image
    end

    drop_table :user_details
  end
end
