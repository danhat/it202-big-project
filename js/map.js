


let chart_button = document.querySelector('.chart-button');
  
chart_button.addEventListener('click', (e) => {
    
  // go to chart page once button is clicked
  document.querySelector("#mychart").style.display = "block";
  document.querySelector("#mydata").style.display = "none";
  document.querySelector("#mytable").style.display = "none";
    
  
  
  //function initMap() {
    let node_location = {lat: 41.8781136, lng: -87.6297982};
    
  let map = new google.maps.Map(document.getElementById('mychart'), {
    zoom: 6,
    center: node_location
  });


  let infoWindow = new google.maps.InfoWindow({
    content: 'here'
    /*content: [i.dba_name]*/
  });

  let marker = new google.maps.Marker({
    position: {lat: parseFloat(node_location["lat"]), lng: parseFloat(node_location["lng"])},
    map: map,
    title: 'here'
  })

  marker.addListener('click', function() {
    infoWindow.open(map, marker);
  });
          
  //};
  
  

  
})














