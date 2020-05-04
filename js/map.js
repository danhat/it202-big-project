//function initMap() {
let node_location = {lat: 41.8781136, lng: -87.6297982}

/*var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 6,
  center: node_location
});*/

db.PM25.toArray()
  .then((array) => {
    for (a of array){
      console.log(a);
    }

  })

/*for (let i of inspection_data) {

  let res = (i.inspection_date).split("T"); 
  let contentString =  '<div id="content">' + 
    '<h3 class = "firstHeading">' +
    i.dba_name +
    '</h3>' +
    '<p>' +
    i.facility_type +
    '</p>' +
    '<p>' +
    i.address +
    '</p>' +
    '<p>' +
    res[0] +
    '</p>' +
    '<p>' +
    i.results +
    '</p>' +

    '</div>';


  let infoWindow = new google.maps.InfoWindow({
    content: contentString
    //content: [i.dba_name]
  });

  let marker = new google.maps.Marker({
    position: {lat: parseFloat(i["latitude"]), lng: parseFloat(i["longitude"])},
    map: map,
    title: i["dba_name"]
  })

  marker.addListener('click', function() {
    infoWindow.open(map, marker);
  });
};*/


//}