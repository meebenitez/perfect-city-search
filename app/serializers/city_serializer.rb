class CitySerializer < ActiveModel::Serializer
  attributes :id, :name, :short_state, :census_id, :long_state, :population, :median_age, :median_property_value, :median_household_income, :region, :img, :img_thumbnail, :popularity
end
