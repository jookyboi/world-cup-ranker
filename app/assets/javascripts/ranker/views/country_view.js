var Ranker = Ranker || {};

Ranker.CountryView = Backbone.View.extend({
    tagName: "li",
    rank: null,
    canVote: null,

    template: function() {
        return _.template(
            $("#country-template").html(),
            {
                country: this.model.toJSON(),
                rank: this.rank,
                can_vote: this.canVote
            }
        );
    },

    events: {
        "click .vote-up": "clickVoteUp"
    },

    initialize: function(options) {
        this.rank = options.rank;
        this.canVote = options.canVote;

        this.render();
    },

    render: function() {
        this.$el.html(
            this.template()
        );
    },

    clickVoteUp: function(evt) {
        var $button = $(evt.target);

        if (!$button.hasClass("vote-up-disabled")) {
            // bump up votes
            var numVotes = this.model.get("num_votes");
            this.model.set("num_votes", numVotes + 1);
            this.model.save();
        }
    }
});