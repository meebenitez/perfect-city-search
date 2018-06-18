class CitySerializer < ActiveModel::Serializer
  attributes :id, :name,:short_state, :census_id, :long_state,
  :region, :county, :longitude, :latitude,
  :place_id, :pop_total_by_sex, :pop_total,
  :pop_white, :pop_black, :pop_native,
  :pop_asian, :pop_pacific, :pop_other_race,
  :pop_mixed_race, :pop_latin_hispanic, :commuters_total,
  :commuters_drivers, :commuters_carpoolers, :commuters_pubtrans,
  :commuters_walkers, :commuters_tele, :homes_median_value,
  :homes_solar_powered, :homes_total, :homes_owner_occupied,
  :homes_renter_occupied, :homes_children_under_18, :homes_children_under_6_only,
  :vets_total, :education_total, :poverty_total_any, :poverty_total_poverty_level,
  :income_median, :age_median, :age_median_male,
  :age_median_female, :homes2_total, :homes2_occupied,
  :homes2_vacant, :fips_state, :fips_place,
  :img, :img_thumb, :img_wiki_src,
  :img_title, :img_artist, :img_source,
  :img_license, :popularity
end
