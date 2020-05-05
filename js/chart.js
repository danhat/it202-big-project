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
    
    let items = [];

    for (let item of pm25_data) {
      if (item['value'] > 0.0000000) {
        data.addRow(['PM 2.5', item['value']]);
        break;
      }
    }

    for (let item of pm1_data) {
      if (item['value'] > 0.0000000) {
        data.addRow(['PM 1', item['value']]);
        break;
      }
    }

    for (let item of so2_data) {
      if (item['value'] > 0.0000000) {
        data.addRow(['SO2', item['value']]);
        break;
      }
    }

    for (let item of o3_data) {
      if (item['value'] > 0.0000000) {
        data.addRow(['O3', item['value']]);
        break;
      }
    }

    for (let item of no2_data) {
      if (item['value'] > 0.0000000) {
        data.addRow(['NO2', item['value']]);
        break;
      }
    }

    for (let item of h2s_data) {
      if (item['value'] > 0.0000000) {
        data.addRow(['H2S', item['value']]);
        break;
      }
    }

    for (let item of co_data) {
      if (item['value'] > 0.0000000) {
        data.addRow(['CO', item['value']]);
        break;
      }
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

