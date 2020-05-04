let chart_button = document.querySelector('.chart-button');
  
chart_button.addEventListener('click', (e) => {
    
  // go to chart page once button is clicked
  document.querySelector("#mychart").style.display = "block";
  document.querySelector("#mydata").style.display = "none";
  document.querySelector("#mymap").style.display = "none";

  // Load the Visualization API and the corechart and line packages.
  google.charts.load('current', {'packages':['corechart']});

  // Set a callback to run when the Google Visualization API is loaded.
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {

    // Create the data table for pie chart.
    let data = new google.visualization.DataTable();
    data.addColumn('string', 'Pollution Sensor');
    data.addColumn('number', 'Value');
     

    /*
     * Get data for pie chart
     */      
    
    /*const values = db.Pollution.toArray();
    
    for (item of values) {
      data.addRow([item['sensor_path'], item['value']]);
    }*/
    
    
    
    let item = pm25_data[0];
    if (item > 0.0) {
      data.addRow([item['sensor_path'], item['value']]);
    }
    
    item = pm1_data[0];
    if (item > 0.0) {
      data.addRow([item['sensor_path'], item['value']]);
    }
    
    item = so2_data[0];
    if (item > 0.0) {
      data.addRow([item['sensor_path'], item['value']]);
    }
    
    item = o3_data[0];
    if (item > 0.0) {
      data.addRow([item['sensor_path'], item['value']]);
    }
    
    item = no2_data[0];
    if (item > 0.0) {
      data.addRow([item['sensor_path'], item['value']]);
    }
    
    item = h2s_data[0];
    if (item > 0.0) {
      data.addRow([item['sensor_path'], item['value']]);
    }
    
    item = co_data[0];
    if (item > 0.0) {
      data.addRow([item['sensor_path'], item['value']]);
    }
      
      
    /* 
     * Pie Chart
     */
    // Set chart options
    let options = {'title':'Latest Pollution Values',
                   'width':500,
                   'height':400};

    // Instantiate and draw our chart, passing in some options.
    let chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);     


  }
    
})

