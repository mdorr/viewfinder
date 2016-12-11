class CreateFollows < ActiveRecord::Migration[5.0]
  def change
    create_table :follows do |t|
      t.integer   :followed_id, null: false
      t.integer   :following_id, null: false

      t.timestamps
    end

    add_index :follows, :followed_id
    add_index :follows, :following_id
  end
end
