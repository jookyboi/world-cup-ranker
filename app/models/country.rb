class Country < ActiveRecord::Base
  validates :name, :presence => true
  validates :code, :presence => true
  validates :num_votes, :presence => true
end
