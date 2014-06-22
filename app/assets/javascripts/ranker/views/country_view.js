var Ranker = Ranker || {};

Ranker.CountryView = Backbone.View.extend({
    tagName: "li",
    rank: null,

    template: function() {
        return _.template(
            $("#country-template").html(),
            {
                country: this.model.toJSON(),
                rank: this.rank
            }
        );
    },

    initialize: function(options) {
        this.rank = options.rank;
        this.render();
    },

    render: function() {
        this.$el.html(
            this.template()
        );
    }
});