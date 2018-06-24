class City < ApplicationRecord
    has_many :cities_users
    has_many :users, through: :cities_users
    

    scope :by_population, -> (from, to) { where("pop_total >= ? AND pop_total <= ?", from, to)}
    scope :by_age, -> (from, to) { where("age_median >= ? AND age_median <= ?", from, to)}
    scope :by_home_price, -> (from, to) { where("homes_median_value >= ? AND homes_median_value <= ?", from, to)}
    scope :by_median_income, -> (from) { where("income_median >= ?", from)}
    scope :by_region, -> (region) { where(region: region)}
    scope :by_owner_majority, -> where{"homes_owner_occupied_perc >= homes_renter_occupied_perc"}
    scope :by_renter_majority, -> where{"homes_renter_occupied_perc >= homes_owner_occupied_perc"}

    class << self
        def per_page
            24
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
