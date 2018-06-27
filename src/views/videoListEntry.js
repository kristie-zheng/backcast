var VideoListEntryView = Backbone.View.extend({


  render: function() {
    console.log(this.model);
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
