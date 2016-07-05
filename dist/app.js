var nav = '<h2></h2>';
var albumPhotos = '<a href="#"><img src="" alt="" /></a>';


$(document).ready(function() {
    // code will only run after the entire docuemnt is loaded and ready
    console.log('documentReady');

    var parent = $('.nav');
    console.log(parent);
    data.forEach(function(album, i, arr) {
        var $album = $('<h2></h2>').text(album.name)
        parent.append($album);

    });



    var parent2 = $('.albums');

    data.forEach(function(photo, i, arr) {
        var $albumtitle = $('<h1></h1>').text(photo.name)
        parent2.append($albumtitle);
        var $albumPhoto = $('<img></>').attr('src', (photo.photos[0])).attr('data-prettyPics', i);
        $albumPhoto.click(albumClickHandler);

        parent2.append($albumPhoto);


    });

    function albumClickHandler(evt){
        var whichPhoto = $(this);
      data.forEach(function(photos,i,arr) {
      var newPhotos = $(data).index[0];
      $(h1).append(newPhotos);

})
};



    var parent = $('.nav');
    console.log(parent);
    data.forEach(function(album, i, arr) {
        var $album = $('<h2></h2>').text(album.name)
        parent.append($album);

    });


  });
