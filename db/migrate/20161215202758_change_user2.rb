class ChangeUser2 < ActiveRecord::Migration[5.0]
  def change
    change_column :users, :description, :text, :null => false, :default => ''
  end
end
