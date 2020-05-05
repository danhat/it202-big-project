


let map_button = document.querySelector('.map-button');
  
map_button.addEventListener('click', (e) => {
    
  // go to chart page once button is clicked
  document.querySelector("#mymap").style.display = "block";
  document.querySelector("#mydata").style.display = "none";
  document.querySelector("#mychart").style.display = "none";
    
  let chi_location = {lat: 41.8781136, lng: -87.6297982};
  let user_loc;
  let map = new google.maps.Map(document.getElementById('mymap'), {
      zoom: 6,
      center: chi_location
    });
  
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
    
    map = new google.maps.Map(document.getElementById('mymap'), {
      zoom: 6,
      center: chi_location
    });
    
    let infoWindow = new google.maps.InfoWindow({
      content: 'Chicago'
    });

    let marker = new google.maps.Marker({
      position: {lat: parseFloat(chi_location["lat"]), lng: parseFloat(chi_location["lng"])},
      map: map,
      title: 'Chicago'
    })

    marker.addListener('click', function() {
      infoWindow.open(map, marker);
    });
    
  }

  getLocation();
  
  let items = [pm25_data[0], pm1_data[0], so2_data[0], o3_data[0], no2_data[0], h2s_data[0], co_data[0]];
  
  for (let item of items) {
    console.log(item);
    let contentString =  '<div id="content">' + 
      '<h3 class = "firstHeading">' +
      item['sensor_path']  +
      '</h3>' +
      '<p>' +
      item['value']  +
      '</p>' +
      '<p>' +
      item['uom']  +
      '</p>' +
      '<p>' +
      item['timestamp']  +
      '</p>' +
      '</div>';
    let infoWindow = new google.maps.InfoWindow({
      content: contentString 
    });

    let marker = new google.maps.Marker({
      position: {lat: parseFloat(item.location.geometry.coordinates[1]), lng: parseFloat(item.location.geometry.coordinates[0])},
      map: map,
      title: 'here'
    })

    marker.addListener('click', function() {
      infoWindow.open(map, marker);
    });
  }
     

  
})














