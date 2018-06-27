var Videos = Backbone.Collection.extend({

  model: Video,
  search: function(input) {
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      maxResults: 5,
      data: {
        'part': 'snippet',
        'q':input,
        'type': 'video',
        'videoEmbeddable': 'true',
        'key': 'AIzaSyBVRwdv2WIryAinq8DkqgB5NoY3PBtkvho',
      },
      success: function (data) {
        console.log(data);
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('youtube: Failed to get videos');
      }
    });
  }
});
