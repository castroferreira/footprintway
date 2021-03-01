 $.ajax({
    url: 'https://api.unsplash.com/search/photos?query=ecology&client_id=Lpkvo7cc1CopuSpK_ez3HwhNIGhczR2Mwiw-K3I4x84',
    dataType: 'json',
    success: function (photos) {
      $.each(photos.results, function (index, photo) {
        console.log(index + "- " + photo);

        $("#imagens2").append(
          '<div class="col-lg-6 col-sm-4 py-3">' +
          '<img class="img-fluid img-thumbnail zoom" src="' + photo.urls.regular + '" width="auto" height="auto">' +
          '</div>'
        );
      });
    }
  });


  