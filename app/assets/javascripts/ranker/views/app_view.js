var Ranker = Ranker || {};

Ranker.AppView = Backbone.View.extend({
    className: "app-container",

    views: {
        countries: []
    },

    template: function() {
        return _.template(
            $("#app-template").html()
        );
    },

    initialize: function() {
        this.views = {
            countries: []
        };

        this.render();

        // when collection is fetched, re-render
        this.listenTo(this.collection, "sync", this.render);
    },

    render: function() {
        // container
        this.$el.html(
            this.template()
        );

        // country rankings
        var $countryRankings = this.$el.find(".country-rankings");
        $countryRankings.empty();

        this.collection.each(function(country, i) {
            var countryView = new Ranker.CountryView({
                model: country,
                rank: i + 1
            });

            $countryRankings.append(countryView.el);
        });
    }
});