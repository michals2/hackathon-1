function initMap() {

  // https://developers.google.com/maps/documentation/javascript/directions
  var directionsService = new google.maps.DirectionsService;
  // used to calculate directions
  // has many built in methods: for example directionsService.route
  var directionsDisplay = new google.maps.DirectionsRenderer;
  // used to render the map or display directions
  // directionsDisplay.setMap and directionsDisplay.setDirections
  

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: {lat: 41.85, lng: -87.65}
  });


  directionsDisplay.setMap(map);

  var onChangeHandler = function(e) {
    let key = e.which || e.keyCode;
      if (key === 13) { // 13 is enter
      calculateAndDisplayRoute(directionsService, directionsDisplay);
    }
  };


  document.getElementById('start').addEventListener('keypress', function(e){
    onChangeHandler(e)
  });
  document.getElementById('end').addEventListener('keypress', function (e){
    onChangeHandler(e)
  });
  document.getElementById('resize-button').addEventListener('click', function (e){
    

    var new_height = ($('#map').height() == 300) ? 7000 : 300;
    var new_width = ($('#map').width() == 500) ? 1400 : 500;
    $('#map').animate({
        height: new_height,
        width: new_width
    });

      $( "body" ).css( "height", new_height);

  });
}

// html, body {
//   height: 100%;
//   margin: 0;
//   padding: 0;
// }


function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  directionsService.route({
    origin: document.getElementById('start').value,
    destination: document.getElementById('end').value,
    travelMode: 'DRIVING'
  }, function(response, status) {
    if (status === 'OK') {
      directionsDisplay.setDirections(response);

    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });




}

