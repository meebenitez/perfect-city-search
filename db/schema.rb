# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180622195514) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "api_keys", force: :cascade do |t|
    t.string "access_token"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "cities", force: :cascade do |t|
    t.string "name"
    t.string "short_state"
    t.string "census_id"
    t.string "long_state"
    t.string "region"
    t.string "county"
    t.string "longitude"
    t.string "latitude"
    t.string "place_id"
    t.integer "pop_total_by_sex"
    t.integer "pop_total"
    t.integer "pop_white"
    t.integer "pop_black"
    t.integer "pop_native"
    t.integer "pop_asian"
    t.integer "pop_pacific"
    t.integer "pop_other_race"
    t.integer "pop_mixed_race"
    t.integer "pop_latin_hispanic"
    t.integer "commuters_total"
    t.integer "commuters_drivers"
    t.integer "commuters_carpoolers"
    t.integer "commuters_pubtrans"
    t.integer "commuters_walkers"
    t.integer "commuters_tele"
    t.integer "homes_median_value"
    t.integer "homes_solar_powered"
    t.integer "homes_total"
    t.integer "homes_owner_occupied"
    t.integer "homes_renter_occupied"
    t.integer "homes_children_under_18"
    t.integer "homes_children_under_6_only"
    t.integer "vets_total"
    t.integer "education_total"
    t.integer "poverty_total_any"
    t.integer "poverty_total_poverty_level"
    t.integer "income_median"
    t.float "age_median"
    t.float "age_median_male"
    t.float "age_median_female"
    t.integer "homes2_total"
    t.integer "homes2_occupied"
    t.integer "homes2_vacant"
    t.integer "fips_state"
    t.integer "fips_place"
    t.string "img"
    t.string "img_thumb"
    t.string "img_wiki_src"
    t.string "img_title"
    t.string "img_artist"
    t.string "img_source"
    t.string "img_license"
    t.integer "popularity"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "dem_vote_count"
    t.integer "gop_vote_count"
    t.integer "ind_vote_count"
    t.integer "total_vote_count"
    t.float "dem_vote_perc"
    t.float "gop_vote_perc"
    t.float "ind_vote_perc"
  end

  create_table "cities_users", force: :cascade do |t|
    t.integer "user_id"
    t.integer "city_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
