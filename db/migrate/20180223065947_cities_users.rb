class CitiesUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :cities_users do |t|
      t.integer :user_id
      t.integer :city_id
      t.timestamps
    end
  end
end
