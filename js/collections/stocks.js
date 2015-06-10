Stocks = Backbone.Collection.extend({
  initialize: function () {
    this.view = new StocksIndexView( {collection: this});
  },

  model: Stock
});