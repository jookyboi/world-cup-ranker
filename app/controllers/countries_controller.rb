class CountriesController < ApplicationController
  def index
    countries = Country.all
    render json: countries
  end

  def update
    country = Country.find(params[:id])

    country.update_attribute(
        :num_votes, params[:num_votes]
    )

    render json: country
  end
end