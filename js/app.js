var dogs = new Dogs();  // create a new Dogs Collection
var router = new Router();  // Create a new Router to handle routes.
Backbone.history.start();    // Start tracking routes history.
router.navigate('dogs');      // Start our app at the #dogs route by default.

