require 'pry'
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

        def occupant_majority(type)
            if type == "owner"
                return where("homes_owner_occupied_perc >= homes_renter_occupied_perc")
            elsif type == "renter"
                return where("homes_renter_occupied_perc >= homes_owner_occupied_perc")
            else
                return nil
            end
        end

        def poverty_rate(type)
            if type == "low"
                return where("poverty_perc <= ?", 7)
            elsif type == "high"
                return where("poverty_perc >= ?", 18)
            elsif type == "avg"
                return where("poverty_perc > ? AND poverty_perc < ?", 7, 17)
            else
                return nil
            end
        end

        def racial_diversity(type)
            if type == "yes"
                #binding.pry
                return where("pop_white_perc < ?", 60).where("pop_black_perc < ?", 60).where("pop_native_perc < ?", 60)
                .where("pop_asian_perc < ?", 60).where("pop_pacific_perc < ?", 60).where("pop_other_race_perc < ?", 60)
                .where("pop_latin_hispanic_perc < ?", 60)
            end
        end

        def swing_county(type, party)
            if party == "democrat" || party == nil
                return where("dem_vote_perc - gop_vote_perc <= ?", 15)
            else
                return where("gop_vote_perc - dem_vote_perc <= ?", 15)
            end
        end


        def politics(party)
            if party == "democrat"
                return where("dem_vote_perc > gop_vote_perc AND dem_vote_perc > ind_vote_perc ")
            elsif party == "republican"
                return where("gop_vote_perc > dem_vote_perc AND gop_vote_perc > ind_vote_perc ")
            elsif party == "independent"
                return where("ind_vote_perc > dem_vote_perc AND ind_vote_perc > gop_vote_perc ")
            else
                return nil
            end
        end


        #:pop_white => row[18],
        #:pop_black => row[19],
        #:pop_native => row[20],
        #:pop_asian => row[21],
        #:pop_pacific => row[22],
        #:pop_other_race => row[23],
        #:pop_latin_hispanic => row[25],

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
