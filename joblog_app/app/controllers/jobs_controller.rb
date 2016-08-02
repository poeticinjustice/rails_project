class JobsController < ApplicationController
  def index
    url = "https://data.cityofnewyork.us/resource/swhp-yxa4.json?$limit=10"
    response = HTTParty.get(url)
    parsed_body = JSON.parse(response.body)
    render json: parsed_body
  end
end
