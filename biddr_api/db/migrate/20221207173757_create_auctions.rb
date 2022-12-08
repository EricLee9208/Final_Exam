class CreateAuctions < ActiveRecord::Migration[7.0]
  def change
    create_table :auctions do |t|
      t.string :title
      t.text :description
      t.integer :price
      t.date :end_date
      t.timestamps
    end
  end
end
