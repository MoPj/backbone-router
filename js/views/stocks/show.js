StockShowView = Backbone.View.extend({

  template: _.template($('#stock-show-template').html()),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this.el; 
  }
});