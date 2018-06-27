var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
  },
  
  
  render: function() {
    var html = [
    ].join('');
    
    
    this.$el.html(this.template());
    new VideoListView({collection: this.videos, el: this.$('.list')}).render();
    new VideoPlayerView({model: this.videos.at(0), el: this.$('.player')});
    // new SearchView({collection: this.videos, el: this.$('.')}).render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
