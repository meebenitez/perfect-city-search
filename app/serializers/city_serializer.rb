class CitySerializer < ActiveModel::Serializer
  attributes :id, :name, :short_state, :census_id, :long_state,
            :region, :county, :longitude, :latitude,
          :place_id,
          :pop_total_by_sex,
          :pop_total,
          :pop_white,
          :pop_white_perc,
          :pop_black,
          :pop_black_perc,
          :pop_native,
          :pop_native_perc,
          :pop_asian,
          :pop_asian_perc,
          :pop_pacific,
          :pop_pacific_perc,
          :pop_other_race,
          :pop_other_race_perc,
          :pop_mixed_race,
          :pop_mixed_race_perc,
          :pop_latin_hispanic,
          :pop_latin_hispanic_perc,
          :commuters_total,
          :commuters_drivers,
          :commuters_drivers_perc,
          :commuters_carpoolers,
          :commuters_carpoolers_perc,
          :commuters_pubtrans,
          :commuters_pubtrans_perc,
          :commuters_walkers,
          :commuters_walkers_perc,
          :commuters_tele,
          :commuters_tele_perc,
          :homes_median_value,
          :homes_solar_powered,
          :homes_solar_perc,
          :homes_total,
          :homes_owner_occupied,
          :homes_owner_occupied_perc,
          :homes_renter_occupied,
          :homes_renter_occupied_perc,
          #:homes_children_under_18 => row[37] + row[39],
          #:homes_children_under_6_only => row[38] + row[40],
          :vets_total,
          :vets_perc,
          :education_total,
          :education_perc,
          :poverty_total_any,
          :poverty_total_poverty_level,
          :poverty_perc,
          :income_median,
          :age_median,
          :age_median_male,
          :age_median_female,
          :homes2_total,
          :homes2_occupied,
          :homes2_occupied_perc,
          :homes2_vacant,
          :homes2_vacant_perc,
          :fips_state,
          :fips_place,
          :img,
          :img_thumb,
          :img_wiki_src,
          :img_title,
          :img_artist,
          :img_source,
          :img_license,
          :popularity,
          :dem_vote_count,
          :gop_vote_count,
          :ind_vote_count,
          :total_vote_count,
          :dem_vote_perc,
          :gop_vote_perc,
          :ind_vote_perc
end
