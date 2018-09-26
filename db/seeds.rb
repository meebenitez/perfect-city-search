# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'csv'
require 'pry'


    City.delete_all

count = 1

def percent_calc(part, whole)
    return ((part.to_d * 100) / whole.to_d).truncate(2).to_f
end

csv_text = File.read(Rails.root.join('db', 'new_upload_voters2.csv'))
csv = CSV.parse(csv_text, :headers => false)
    csv.each do |row|
        #binding.pry
        City.create!({
          :name => row[0],
          :short_state => row[1],
          :census_id => row[2],  
          :long_state => row[3],
          :region => row[4],
          :county => row[5],
          :longitude => row[6],
          :latitude => row[7],
          :place_id => row[8],
          :pop_total_by_sex => row[16],
          :pop_total => row[17],
          :pop_white => row[18],
          :pop_white_perc => percent_calc(row[18],row[17]),#(row[18] * 100 / row[17]),
          :pop_black => row[19],
          :pop_black_perc => percent_calc(row[19],row[17]),#(row[19] * 100 / row[17]),
          :pop_native => row[20],
          :pop_native_perc => percent_calc(row[20],row[17]),#(row[20] * 100 / row[17] ),
          :pop_asian => row[21],
          :pop_asian_perc => percent_calc(row[21],row[17]),#(row[21] * 100 / row[17] ),
          :pop_pacific => row[22],
          :pop_pacific_perc => percent_calc(row[22],row[17]),#(row[22] * 100 / row[17] ),
          :pop_other_race => row[23],
          :pop_other_race_perc => percent_calc(row[23],row[17]),#(row[23] * 100 / row[17] ),
          :pop_mixed_race => row[24],
          :pop_mixed_race_perc => percent_calc(row[24],row[17]),#(row[24] * 100 / row[17] ),
          :pop_latin_hispanic => row[25],
          :pop_latin_hispanic_perc => percent_calc(row[25],row[17]),
          :commuters_total => row[26],
          :commuters_drivers => row[27],
          :commuters_drivers_perc => percent_calc(row[27],row[26]),#(row[27] * 100 / row[26] ), #new
          :commuters_carpoolers => row[28],
          :commuters_carpoolers_perc => percent_calc(row[28],row[26]),#(row[28] * 100 / row[26] ), #new
          :commuters_pubtrans => row[29],
          :commuters_pubtrans_perc => percent_calc(row[29],row[26]),#(row[29] * 100 / row[26] ), #new
          :commuters_walkers => row[30],
          :commuters_walkers_perc => percent_calc(row[30],row[26]),#(row[30] * 100 / row[26] ), #new
          :commuters_tele => row[31],
          :commuters_tele_perc => percent_calc(row[31],row[26]),#(row[31] * 100 / row[26] ), #new
          :homes_median_value => row[32],
          :homes_solar_powered => row[33],
          :homes_solar_perc => percent_calc(row[33],row[34]),#(row[33] * 100 / row[34] ), #new
          :homes_total => row[34],
          :homes_owner_occupied => row[35],
          :homes_owner_occupied_perc => percent_calc(row[35],row[34]),#(row[35] * 100 / row[34] ), #new
          :homes_renter_occupied => row[36],
          :homes_renter_occupied_perc => percent_calc(row[36],row[34]),#(row[36] * 100 / row[34] ), #new
          #:homes_children_under_18 => row[37] + row[39],
          #:homes_children_under_6_only => row[38] + row[40],
          :vets_total => row[41],
          :vets_perc => percent_calc(row[41],row[17]),#(row[41] * 100 / row[17] ), #new
          :education_total => row[42],
          :education_perc => percent_calc(row[42],row[17]),#(row[42] * 100 / row[17] ), # new
          :poverty_total_any => row[43],
          :poverty_total_poverty_level => row[44],
          :poverty_perc => percent_calc(row[44],row[43]),#(row[44] * 100 / row[43] ), #new
          :income_median => row[45],
          :age_median => row[46],
          :age_median_male => row[47],
          :age_median_female => row[48],
          :homes2_total => row[49],
          :homes2_occupied => row[50],
          :homes2_occupied_perc => percent_calc(row[50],row[49]),#(row[50] * 100 / row[49] ), #new
          :homes2_vacant => row[51],
          :homes2_vacant_perc => percent_calc(row[51],row[49]),#(row[51] * 100 / row[49] ), #new
          :fips_state => row[52],
          :fips_place => row[53],
          :img => row[54],
          :img_thumb => row[55],
          :img_wiki_src => row[56],
          :img_title => row[57],
          :img_artist => row[58],
          :img_source => row[59],
          :img_license => row[60],
          :popularity => row[61],
          :dem_vote_count => row[62],
          :gop_vote_count => row[63],
          :ind_vote_count => row[64],
          :total_vote_count => row[65],
          :dem_vote_perc => row[66],
          :gop_vote_perc => row[67],
          :ind_vote_perc => row[68]

        })
        puts "Row #{count} added!"
        puts row[61]
        count +=1
    end
puts "Cities seeded!"