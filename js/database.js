


const db = new Dexie('Pollution Database');


let data_button = document.querySelector('.data-button');
  
data_button.addEventListener('click', (e) => {
  
  // Declare tables, IDs and indexes
  db.version(1).stores({
    Pollution: '++id, sensor'
  });

  pm1_data.forEach(item => {
    //console.log(item.location.geometry.coordinates[0]);
    db.Pollution.add({
      sensor: item['sensor_path'], 
      timestamp: item['timestamp'],
      value: item['value'],
      uom: item['uom'],
      longitude: item.location.geometry.coordinates[0],
      latitude: item.location.geometry.coordinates[1]
    });
  });


  pm25_data.forEach(item => {
    db.Pollution.add({
      sensor: item['sensor_path'],
      timestamp: item['timestamp'],
      value: item['value'],
      uom: item['uom'],
      longitude: item.location.geometry.coordinates[0],
      latitude: item.location.geometry.coordinates[1]
    });
  });

  so2_data.forEach(item => {
    db.Pollution.add({
      sensor: item['sensor_path'],
      timestamp: item['timestamp'],
      value: item['value'],
      uom: item['uom'],
      longitude: item.location.geometry.coordinates[0],
      latitude: item.location.geometry.coordinates[1]
    });
  });

  o3_data.forEach(item => {
    db.Pollution.add({
      sensor: item['sensor_path'],
      timestamp: item['timestamp'],
      value: item['value'],
      uom: item['uom'],
      longitude: item.location.geometry.coordinates[0],
      latitude: item.location.geometry.coordinates[1]
    });
  });

  no2_data.forEach(item => {
    db.Pollution.add({
      sensor: item['sensor_path'],
      timestamp: item['timestamp'],
      value: item['value'],
      uom: item['uom'],
      longitude: item.location.geometry.coordinates[0],
      latitude: item.location.geometry.coordinates[1]
    });
  });

  h2s_data.forEach(item => {
    db.Pollution.add({
      sensor: item['sensor_path'],
      timestamp: item['timestamp'],
      value: item['value'],
      uom: item['uom'],
      longitude: item.location.geometry.coordinates[0],
      latitude: item.location.geometry.coordinates[1]
    });
  });

  co_data.forEach(item => {
    db.Pollution.add({
      sensor: item['sensor_path'],
      timestamp: item['timestamp'],
      value: item['value'],
      uom: item['uom'],
      longitude: item.location.geometry.coordinates[0],
      latitude: item.location.geometry.coordinates[1]
    });
  });
  
 


  /*db.Pollution.toArray()
    .then((array) => {
      for (a of array){
        console.log(a);
      }

    });*/

  
    
})

