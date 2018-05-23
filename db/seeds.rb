# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'csv'


    City.delete_all

count = 1

csv_text = File.read(Rails.root.join('db', 'new_upload2.csv'))
csv = CSV.parse(csv_text, :headers => false)
    csv.each do |row|
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
          :pop_black => row[19],
          :pop_native => row[20],
          :pop_asian => row[21],
          :pop_pacific => row[22],
          :pop_other_race => row[23],
          :pop_mixed_race => row[24],
          :pop_latin_hispanic => row[25],
          :commuters_total => row[26],
          :commuters_drivers => row[27],
          :commuters_carpoolers => row[28],
          :commuters_pubtrans => row[29],
          :commuters_walkers => row[30],
          :commuters_tele => row[31],
          :homes_median_value => row[32],
          :homes_solar_powered => row[33],
          :homes_total => row[34],
          :homes_owner_occupied => row[35],
          :homes_renter_occupied => row[36],
          #:homes_children_under_18 => row[37] + row[39],
          #:homes_children_under_6_only => row[38] + row[40],
          :vets_total => row[41],
          :education_total => row[42],
          :poverty_total_any => row[43],
          :poverty_total_poverty_level => row[44],
          :income_median => row[45],
          :age_median => row[46],
          :age_median_male => row[47],
          :age_median_female => row[48],
          :homes2_total => row[49],
          :homes2_occupied => row[50],
          :homes2_vacant => row[51],
          :fips_state => row[52],
          :fips_place => row[53],
          :img => row[54],
          :img_thumb => row[55],
          :img_wiki_src => row[56],
          :img_title => row[57],
          :img_artist => row[58],
          :img_source => row[59],
          :img_license => row[60],
          :popularity => row[61]    
        })
        puts "Row #{count} added!"
        puts row[61]
        count +=1
    end
puts "Cities seeded!"