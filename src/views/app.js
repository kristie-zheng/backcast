var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.render();
    new VideoListView({collection: window.exampleVideoData, el: this.$('.list')}).render();
  },


  render: function() {
    var html = [
    ].join('');


    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
