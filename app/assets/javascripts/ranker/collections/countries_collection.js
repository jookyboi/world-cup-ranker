var Ranker = Ranker || {};

Ranker.CountriesCollection = Backbone.Collection.extend({
    model: Ranker.CountryModel,
    url: "/countries",

    // sort by votes on a country, most first
    comparator: function(country) {
        return -country.get("num_votes");
    }
});