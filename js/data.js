



let url = 'https://api-of-things.plenar.io/api/observations?sensor=alphasense.opc_n2.pm2_5&size=10';

let pm25_data;
fetch(url).then(response => {return response.json();})
  .then(json => {
    console.log(json['data']);
    pm25_data = json['data'];
    
    
    const db = new Dexie('PM2.5 Database');

    // Declare tables, IDs and indexes
    db.version(1).stores({
      PM25: '++id'
    });


    pm25_data.forEach(item => {
      //console.log(item.location.geometry.coordinates[0]);
      
      db.PM25.add({
        timestamp: item['timestamp'],
        value: item['value'],
        longitude: item.location.geometry.coordinates[0],
        latitude: item.location.geometry.coordinates[1]
      });
    });
    
    db.PM25.toArray()
      .then((array) => {
        for (a of array){
          console.log(a);
        }

      })
      
      console.log(pm_db);
    
    /*let node_location = {lat: 41.8781136, lng: -87.6297982}
    
    let map = new google.maps.Map(document.getElementById('map'), {
      zoom: 6,
      center: node_location
    });
    

    for (let i of inspection_data) {
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
    }*/


    
  }
);




















