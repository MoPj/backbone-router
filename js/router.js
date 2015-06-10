Router = Backbone.Router.extend({

  routes: {
    'stocks/create': 'create',                        // #stocks/create
    'stocks/:id/update': 'update',                 // #stocks/0/update
    'stocks/:id/destroy': 'destroy',               // #stocks/0/destroy    
    'stocks/:id': 'show',                               // #stocks/0
    'stocks': 'index',                                    // #stocks
    '': 'index'                                             //#
  },

showView: function (view) {
  if (this.currentView) {
    this.currentView.remove();   // remove from the view and unbind any event listeners on it
  }
  this.currentView = view;
  $('main').html(this.currentView.render());
},

  create: function() {
    var stock = new Stock();
    var id = stocks.length;
    stocks.add(stock);
    router.navigate('stocks/' + id + '/update', {trigger: true});
  },

    update: function(id) {
    var stock = stocks.at(id);
    stock.editView = new StockEditView({model: stock});
    showView
  },
 
    destroy: function(id) {
    var stock = stocks.at(id);
    if  (window.confirm("Do you really want to destroy this stock?")){
      stock.destroy();
    }
    router.navigate('stocks', {trigger: true});
  },

    show: function(id) {
    var stock = stocks.at(id);
    stock.view = new StockShowView({model: stock}).render();
  },

  index: function() {
    stocks.view.render();
  }

});

