StockEditView = Backbone.View.extend({
  // el: 'main',  if you don't specify a specific an element for view 
  //    by default it will just create a generic div element that it will render into. 

  template: _.template($('#stock-edit-template').html()),

  events: {
    'click .update': 'update'
  },

  update: function() {
    // this.undelegateEvents();  // stop listening for click on update to eliminate creating zombie views
    // console.log(this.model.cid+' updated.');
    this.model.set({
      fullname: $('.fullname').val(),
      age: $('.age').val(),
      fleas: $('.fleas').val()
    });
    router.navigate('stocks', {trigger: true});
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this.el;   //  make sure the render method is always return the element object for this particular view.
  }


});