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

csv_text = File.read(Rails.root.join('db', 'test_cities.csv'))
csv = CSV.parse(csv_text, :headers => false)
    csv.each do |row|
        City.create!({
          :name => row[0],
          :short_state => row[1],
          :census_id => row[2],  
          :long_state => row[3],
          :population => row[4],
          :median_age => row[5],
          :median_property_value => row[6],
          :median_household_income => row[7],
          :region => row[8],
          :popularity => row[9],
          :img => row[10],
          :img_thumbnail => row[11]    
        })
        puts "Row #{count} added!"
        count +=1
    end
puts "Cities seeded!"