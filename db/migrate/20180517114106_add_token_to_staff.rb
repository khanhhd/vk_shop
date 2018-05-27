class AddTokenToStaff < ActiveRecord::Migration[5.0]
  def change
    add_column :staffs, :authentication_token, :string
  end
end
