class CreateCities < ActiveRecord::Migration[5.1]
  def change
    create_table :cities do |t|
      t.string :name
      t.string :short_state
      t.string :census_id  
      t.string :long_state
      t.string :region
      t.string :county
      t.string :longitude
      t.string :latitude
      t.string :place_id
      t.integer :pop_total_by_sex
      t.integer :pop_total
      t.integer :pop_white
      t.integer :pop_black
      t.integer :pop_native
      t.integer :pop_asian
      t.integer :pop_pacific
      t.integer :pop_other_race
      t.integer :pop_mixed_race
      t.integer :pop_latin_hispanic
      t.integer :commuters_total
      t.integer :commuters_drivers
      t.integer :commuters_carpoolers
      t.integer :commuters_pubtrans
      t.integer :commuters_walkers
      t.integer :commuters_tele
      t.integer :homes_median_value
      t.integer :homes_solar_powered
      t.integer :homes_total
      t.integer :homes_owner_occupied
      t.integer :homes_renter_occupied
      t.integer :homes_children_under_18
      t.integer :homes_children_under_6_only
      t.integer :vets_total
      t.integer :education_total
      t.integer :poverty_total_any
      t.integer :poverty_total_poverty_level
      t.integer :income_median
      t.real :age_median
      t.real :age_median_male
      t.real :age_median_female
      t.integer :homes2_total
      t.integer :homes2_occupied
      t.integer :homes2_vacant
      t.integer :fips_state
      t.integer :fips_place
      t.string :img
      t.string :img_thumb
      t.string :img_wiki_src
      t.string :img_title
      t.string :img_artist
      t.string :img_source
      t.string :img_license 
      t.integer :popularity

      t.timestamps
    end
  end
end
