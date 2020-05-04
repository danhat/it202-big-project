


let map_button = document.querySelector('.map-button');
  
map_button.addEventListener('click', (e) => {
    
  // go to chart page once button is clicked
  document.querySelector("#mymap").style.display = "block";
  document.querySelector("#mydata").style.display = "none";
  document.querySelector("#mychart").style.display = "none";
    
  let chi_location = {lat: 41.8781136, lng: -87.6297982};
  let user_loc;
  
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

  function showPosition(position) {
    user_loc = {lat: (position.coords.latitude), lng: (position.coords.longitude)};
    //console.log(user_loc);
    //
    let map = new google.maps.Map(document.getElementById('mymap'), {
      zoom: 6,
      center: chi_location
    });
    
    let infoWindow = new google.maps.InfoWindow({
      content: "You're Here"
    });

    let marker = new google.maps.Marker({
      position: {lat: parseFloat(user_loc["lat"]), lng: parseFloat(user_loc["lng"])},
      map: map,
      title: 'here'
    })

    marker.addListener('click', function() {
      infoWindow.open(map, marker);
    });
  }
  
  function showError(error) {
    /*switch(error.code) {
      case error.PERMISSION_DENIED:
        x.innerHTML = "User denied the request for Geolocation."
        break;
      case error.POSITION_UNAVAILABLE:
        x.innerHTML = "Location information is unavailable."
        break;
      case error.TIMEOUT:
        x.innerHTML = "The request to get user location timed out."
        break;
      case error.UNKNOWN_ERROR:
        x.innerHTML = "An unknown error occurred."
        break;
    }*/
    
    let map = new google.maps.Map(document.getElementById('mymap'), {
      zoom: 6,
      center: chi_location
    });
    
    let infoWindow = new google.maps.InfoWindow({
      content: 'Chicago'
    });

    let marker = new google.maps.Marker({
      position: {lat: parseFloat(chi_location["lat"]), lng: parseFloat(chi_location["lng"])},
      map: map,
      title: 'here'
    })

    marker.addListener('click', function() {
      infoWindow.open(map, marker);
    });
    
  }

  getLocation();
  

    
  /*let map = new google.maps.Map(document.getElementById('mymap'), {
    zoom: 6,
    center: user_loc
  });


  let infoWindow = new google.maps.InfoWindow({
    content: 'here'
  });

  let marker = new google.maps.Marker({
    position: {lat: parseFloat(node_location["lat"]), lng: parseFloat(node_location["lng"])},
    map: map,
    title: 'here'
  })

  marker.addListener('click', function() {
    infoWindow.open(map, marker);
  });*/
          
  
  
  

  
})














