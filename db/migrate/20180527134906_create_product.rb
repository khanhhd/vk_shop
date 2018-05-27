class CreateProduct < ActiveRecord::Migration[5.0]
  def change
    create_table :products do |t|
      t.string :name
      t.string :product_code
      t.string :provider
      t.integer :category_id
      t.string :color
      t.string :made_in
      t.boolean :sold_out
      t.string :note

      t.timestamps
    end
  end
end
