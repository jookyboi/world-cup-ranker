desc 'Seed World Cup ranker countries for database'
task :seed_countries => :environment do
  # clean out db first
  Country.all.each do |country|
    country.destroy
  end

  countries = YAML::load(
      File.open("#{Rails.root}/config/countries.yml")
  )

  countries.each do |code, values|
    country = Country.new(
        :code => code,
        :name => values['name'],
        :num_votes => 0
    )
    country.save

    puts "Created #{country.name}"
  end
end
