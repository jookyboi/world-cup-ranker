class CountriesController < ApplicationController
  def index
    countries = Country.all
    render json: countries
  end

  def upvote
    country = Country.find_by_code(
        params[:country_code]
    )

    country.update_attribute(
        :num_votes, country.num_votes + 1
    )
  end
end