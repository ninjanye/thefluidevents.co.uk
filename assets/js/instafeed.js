var feed = new Instafeed({
    get: 'user',
    // tagName: 'fluidfun',
    userId: 'fluideventsco',
    clientId: '83f0deb3bbff4daab69f76cc529800d1',
    acessToken: '5758059809.83f0deb.547cc4a505ee4e71945208e5033851fe',
    filter: function(image) {
        return image.tags.indexOf('fluidfun') >= 0;
      },
    template: '<div class="item"><img src="{{image}} /></div>'
});
feed.run();