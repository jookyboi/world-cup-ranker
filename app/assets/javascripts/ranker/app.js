// Use handlebar-style delimiters
_.templateSettings = {
    interpolate: /\{\{\=(.+?)\}\}/g,
    evaluate: /\{\{(.+?)\}\}/g
};

var Ranker = Ranker || {},
    app = {};

$(function() {
    app.router = new Ranker.Router();

    // kicks off the router's default route
    Backbone.history.start();
});