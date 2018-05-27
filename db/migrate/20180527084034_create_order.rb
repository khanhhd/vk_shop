class CreateOrder < ActiveRecord::Migration[5.0]
  def change
    create_table :orders do |t|
      t.string :name
      t.string :fb_url
      t.datetime :order_time
      t.string :phone
      t.string :address
      t.string :size
      t.integer :product_id
      t.float :original_price
      t.float :shipping_fee
      t.float :total_price
      t.string :shipping_code
      t.string :shipping_method
      t.integer :order_status
      t.text :user_order_info
      t.text :note

      t.timestamps
    end
  end
end
