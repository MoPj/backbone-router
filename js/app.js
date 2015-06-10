var stocks = new Stocks();  // create a new Stocks Collection
var router = new Router();  // Create a new Router to handle routes.
Backbone.history.start();    // Start tracking routes history.
router.navigate('stocks');      // Start our app at the #stocks route by default.

