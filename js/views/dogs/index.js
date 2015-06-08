DogsIndexView = Backbone.View.extend({
  el: 'main',

  template: _.template($('#dogs-index-template').html()),

  render: function() {
    this.$el.html(this.template( {dogs: this.collection.toJSON()}));
  }
});