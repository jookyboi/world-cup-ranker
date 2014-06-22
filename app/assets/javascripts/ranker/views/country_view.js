var Ranker = Ranker || {};

Ranker.CountryView = Backbone.View.extend({
    tagName: "li",

    template: function() {
        return _.template(
            $("#country-template").html(),
            this.model.toJSON()
        );
    },

    initialize: function() {
        this.render();
    },

    render: function() {
        this.$el.html(
            this.template()
        );
    }
});