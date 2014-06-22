var Ranker = Ranker || {};

Ranker.AppView = Backbone.View.extend({
    className: "app-container",

    views: {
        countries: []
    },

    template: function() {
        return _.template(
            $("#app-template").html(),
            {
                votes_left: this.votesLeft(),
                can_vote: this.canVote()
            }
        );
    },

    initialize: function() {
        this.views = {
            countries: []
        };

        this.render();

        // when collection is fetched, re-render
        this.listenTo(this.collection, "sync", this.render);

        // when votes are cast on a country, re-render
        this.listenTo(this.collection, "change", this.sortAndRender);
    },

    sortAndRender: function() {
        this.decrementVote();

        // rankings have to be sorted explicitly after votes change
        this.collection.sort();
        this.render();
    },

    render: function() {
        var _this = this;

        // container
        _this.$el.html(
            _this.template()
        );

        // country rankings
        var $countryRankings = _this.$el.find(".country-rankings");
        $countryRankings.empty();

        _this.collection.each(function(country, i) {
            var countryView = new Ranker.CountryView({
                model: country,
                rank: i + 1,
                canVote: _this.canVote()
            });

            $countryRankings.append(countryView.el);
        });
    },

    votesLeft: function() {
        var tryValue = localStorage["votes_left"];

        if (!tryValue) {
            localStorage["votes_left"] = 5;
            return 5;
        } else {
            return parseInt(tryValue);
        }
    },

    decrementVote: function() {
        localStorage["votes_left"] = this.votesLeft() - 1;
    },

    canVote: function() {
        return (this.votesLeft() > 0);
    }
});