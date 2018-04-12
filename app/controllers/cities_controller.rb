require 'pry'

class CitiesController < ApplicationController

    def index
        if params[:hearted].present? #Search Only Hearted Cities
            @cities = current_user.cities
        elsif params[:popular].present? #Search Only Popular Cities
            @cities = City.where("popularity > ?", 15)
        else
            @cities = City.where(nil) #All City Search
        end
        @cities = @cities.by_region(params[:region]) if params[:region].present?
        @cities = @cities.by_population(params[:pop_from], params[:pop_to]) if params[:pop_from].present?
        @cities = @cities.by_age(params[:age_from], params[:age_to]) if params[:age_from].present?
        @cities = @cities.by_home_price(params[:home_price_from], params[:home_price_to]) if params[:home_price_from].present?
        @cities = @cities.by_median_income(params[:income_from], params[:income_to]) if params[:income_from].present?
        #@cities = @cities.where("median_property_value <= ?", params[:home_value]) if params[:home_value].present?
        #@cities = @cities.where("median_household_income >= ?", params[:income]) if params[:income].present?
        @cities = @cities.order(popularity: :desc).page(params[:page])
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
        @cities = current_user.cities
        render json: @cities, status: 200 
    end


    def show
        @city = City.find_by(id: params[:id])
        render json: @city, status: 200
    end


    private

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