var Ranker = {} || Ranker;

Ranker.CountryModel = Backbone.Model.extend({
    defaults: {
        name: "",
        code: "",
        num_votes: 0
    }
});