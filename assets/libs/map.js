(($) => {
  // When DOM is ready
  $(() => {
    var coords = {
      '0': {
        lat: 40.71614505253804,
        lng: -74.06940334834171,
        infowindow: 'Jersey City Barbell',
      },
      '1': {
        lat: 40.71337833964479,
        lng: -74.0355962666336,
        infowindow: 'Own Your Fitness',
      },
      '2': {
        lat: 40.721298923039264,
        lng: -74.04703068215335,
        infowindow: 'Surge Fitness',
      },
      '3': {
        lat: 40.721298923039264,
        lng: -74.04703068215335,
        infowindow: 'WeStrong',
      },
      '4': {
        lat: 40.72421857195216,
        lng: -74.06560713859923,
        infowindow: 'Four Fitness JC',
      },
      '5': {
        lat: 40.714842920922706,
        lng: -74.04367285342991,
        infowindow: 'Patagonia Fitness',
      },
      '6': {
        lat: 40.71793335625015,
        lng: -74.04311130776847,
        infowindow: 'Dyamond Fitness',
      },
    };

    var markers = [],
      infoWindowContent = [],
      infowindow;

    function initialize(coords) {
      var mapOptions = {
        center: { lat: 40.71614505253804, lng: -74.06940334834171 },
        zoom: 15,
      };

      var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

      $.each(coords, function (key, data) {
        infoWindowContent[key] = data.infowindow;
        var marker = new google.maps.Marker({
          position: { lat: data.lat, lng: data.lng },
          map: map,
          icon: 'assets/images/marker.svg',
        });

        infowindow = new google.maps.InfoWindow({
          content: '<div>' + data.infowindow + '</div>',
        });

        google.maps.event.addListener(marker, 'click', function () {
          infowindow.close();
          infowindow.setContent(infoWindowContent[key]);
          infowindow.open(map, marker);
        });

        markers.push(marker);
      });
    }

    $(document).on('click', '.js-marker', function () {
      var mid = $(this).data('marker');
      infowindow.close();
      google.maps.event.trigger(markers[mid], 'click');
    });

    initialize(coords);
  });
})(jQuery);
