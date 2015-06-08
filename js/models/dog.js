Dog = Backbone.Model.extend({
  initialize: function() {
    console.log(this.cid+' created.');
  },

  defaults: {
    fullname: 'unknown',
    age: 0,
    fleas: false
  }

});