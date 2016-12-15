class ChangeUser < ActiveRecord::Migration[5.0]
  def change
    change_column :users, :firstname, :string, :null => false, :default => ''
    change_column :users, :lastname, :string, :null => false, :default => ''
    change_column :users, :city, :string, :null => false, :default => ''
    change_column :users, :country, :string, :null => false, :default => ''
    change_column :users, :description, :string, :null => false, :default => ''
  end
end
