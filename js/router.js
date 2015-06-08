Router = Backbone.Router.extend({

  routes: {
    'dogs/create': 'create',                        // #dogs/create
    'dogs/:id/update': 'update',                 // #dogs/0/update
    'dogs': 'index',                                    // #dogs
    '': 'index'                                             //#
  },

  create: function() {
    var dog = new Dog();
    var id = dogs.length;
    dogs.add(dog);
    router.navigate('dogs/' + id + '/update', {trigger: true});
  },

    update: function(id) {
    var dog = dogs.at(id);
    dog.editView = new DogEditView({model: dog}).render();
  },
  
  index: function() {
    dogs.view.render();
  }

});

