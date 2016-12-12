class CreatePhoto < ActiveRecord::Migration[5.0]
  def change
    create_table :photos do |t|
      t.attachment  :picture, null: false
      t.integer     :user_id, null: false
      t.text        :description
      t.timestamps
    end
    add_index :photos, :user_id
  end
end
