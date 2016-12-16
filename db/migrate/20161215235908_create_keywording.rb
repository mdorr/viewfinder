class CreateKeywording < ActiveRecord::Migration[5.0]
  def change
    create_table :keywordings do |t|
      t.integer :keyword_id, null: false
      t.integer :photo_id, null: false

      t.timestamps
    end
    add_index :keywordings, :keyword_id
    add_index :keywordings, :photo_id
    add_index :keywordings, [:keyword_id, :photo_id], unique: true
  end
end
