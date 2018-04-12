class City < ApplicationRecord
    has_many :cities_users
    has_many :users, through: :cities_users
    

    scope :by_population, -> (from, to) { where("population >= ? AND population <= ?", from, to)}
    scope :by_age, -> (from, to) { where("median_age >= ? AND median_age <= ?", from, to)}
    scope :by_home_price, -> (from, to) { where("median_property_value >= ? AND median_property_value <= ?", from, to)}
    scope :by_median_income, -> (from, to) { where("median_household_income >= ? AND median_household_income <= ?", from, to)}
    scope :by_region, -> (region) { where(region: region)}


    class << self
        def per_page
            25
        end

        def pages(per_page = self.per_page)
            pages = count / per_page.to_f
            pages += 1 if pages % 1 > 0
            pages.to_i

            offset = (page -1) * per_page
            limit(per_page).offset(offset)
        end
        

    end

end
