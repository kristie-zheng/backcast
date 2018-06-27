var SearchView = Backbone.View.extend({
  initialize: function() {
    this.$el.keyup(function() {

    });
    this.render();
  },
  search: function(str) {
    
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
