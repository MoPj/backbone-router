StocksIndexView = Backbone.View.extend({

  template: _.template($('#stocks-index-template').html()),

  render: function() {
    this.$el.html(this.template( {stocks: this.collection.toJSON()}));
    return this.el;
  }
});