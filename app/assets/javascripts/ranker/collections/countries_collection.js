var Ranker = Ranker || {};

Ranker.CountriesCollection = Backbone.Collection.extend({
    model: Ranker.CountryModel,
    url: "/countries"
});