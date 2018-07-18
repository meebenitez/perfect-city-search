require 'pry'

class CitiesController < ApplicationController

    #before_action :restrict_access
    respond_to :json


    def index
        if params[:hearted].present? #Search Only Hearted Cities
            @cities = current_user.cities
        else
            @cities = City.where(nil) #All City Search
        end
        @cities = @cities.by_region(params[:region]) if params[:region].present?
        @cities = @cities.by_population(params[:pop_from], params[:pop_to]) if params[:pop_from].present?
        @cities = @cities.by_age(params[:age_from], params[:age_to]) if params[:age_from].present?
        @cities = @cities.by_home_price(params[:home_price_from], params[:home_price_to]) if params[:home_price_from].present?
        @cities = @cities.by_median_income(params[:income_from]) if params[:income_from].present?
        @cities = @cities.where("LOWER(name) LIKE ?", "#{params[:term].downcase}%") if params[:term].present?
        @cities = @cities.where("popularity > ?", 25) if params[:popular].present?
        @cities = @cities.occupant_majority(params[:majority_occupant]) if params[:majority_occupant].present?
        @cities = @cities.where("vets_perc > ?", 10) if params[:vet_pop].present?
        @cities = @cities.where("homes_solar_perc >= ?", 5).where("homes_solar_powered > ?", 10) if params[:solar].present?
        @cities = @cities.racial_diversity(params[:diversity]) if params[:diversity].present?
        @cities = @cities.poverty_rate(params[:poverty_rate]) if params[:poverty_rate].present?
        @cities = @cities.politics(params[:majority_party]) if params[:majority_party].present?
        #@cities = @cities.by_owner_majority(params[:maj_owner]) if params[:maj_owner].present?
        #@cities = @cities.by_renter_majority(params[:maj_renter]) if params[:maj_renter].present?
        #@cities = @cities.where("median_property_value <= ?", params[:home_value]) if params[:home_value].present?
        #@cities = @cities.where("median_household_income >= ?", params[:income]) if params[:income].present?
        @cities = @cities.order(popularity: :desc).page(params[:page])
        #@cities = @cities.page(params[:page])
        render json: { cities: @cities, total_count: @cities.total_entries.to_i, total_pages: @cities.total_pages.to_i, per_page: City.per_page }
    end

    def create
        @city = City.create(city_params)
        render json: @city, status: 200
    end

    def add_heart
        @city = City.find_by(id: params[:id])
        if current_user && !current_user.cities.find_by(id: @city.id)
            @city.popularity += 1
            current_user.cities << @city
        end
        render json: @city, status: 200    
    end


    def remove_heart
        @city = City.find_by(id: params[:id])
        if current_user && current_user.cities.find_by(id: @city.id)
            current_user.cities.delete(@city)
            @city.popularity -= 1
            @city.save 
        end
        @cities = current_user.cities
        render json: @cities, status: 200 
    end

    def hearted
        puts "hearted cities"
        @cities = current_user.cities
        render json: @cities, status: 200 
    end


    def show
        search_string = params[:id]
        #@city = City.where(:name => search_string[0...-3]).where(:short_state => search_string[-2..-1]).first
        @city = City.find_by(id: params[:id])
        render json: @city, status: 200
    end


    private
    def restrict_access
        authenticate_or_request_with_http_token do |token, options|
            ApiKey.exists?(access_token: token)
        end
    end

    def city_params
        params.require(:city).permit(
            :name, :short_state, :census_id, 
            :long_state, :population, :median_age, 
            :median_property_value, :median_household_income, :region, 
            :img, :img_thumbnail, :popularity
            )
    end

    def page
        params[:page] || 1
    end


end