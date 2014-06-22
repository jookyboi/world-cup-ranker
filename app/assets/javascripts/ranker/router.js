var Ranker = Ranker || {};

Ranker.Router = Backbone.Router.extend({
    currentView: null,

    routes: {
        "": "home"
    },

    home: function() {
        var countries = new Ranker.CountriesCollection();
        countries.fetch();

        this.currentView = new Ranker.AppView({
            collection: countries
        });

        $("body").html(this.currentView.el);
    }
});