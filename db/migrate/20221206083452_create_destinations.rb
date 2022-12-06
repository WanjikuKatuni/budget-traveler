class CreateDestinations < ActiveRecord::Migration[7.0]
  def change
    create_table :destinations do |t|
      t.string :destination_name
      t.string :location
      t.integer :cost
      t.string :description
      t.string :poster_url

      t.timestamps
    end
  end
end
