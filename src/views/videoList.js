var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('sync', this.render, this);
  },
  
  render: function() {
    // var videoview = 
    // var html = ['<div>','<h5>',view goes here,'</h5>','</div>']
    
    this.$el.children().detach();
    this.$el.html(this.template());
    
    // if (this.collection !== undefined) {
    this.collection.forEach(function(video) {
      this.$el.append(((new VideoListEntryView({model: video})).render()).el);
    }, this);
    // }
      
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
