var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render(i=0);
  },
  
  
  render: function(i) {
    var html = [
    ].join('');
    
    
    this.$el.html(this.template());
    new VideoListView({collection: this.videos, el: this.$('.list')}).render();
    new VideoPlayerView({model: this.videos.at(i), el: this.$('.player'), collection: this.videos});
    new SearchView({collection: this.videos, el: this.$('.search')}).render()
    // new SearchView({collection: this.videos, el: this.$('.')}).render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
