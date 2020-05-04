let table_button = document.querySelector('.table-button');
  
table_button.addEventListener('click', (e) => {
    
  // go to chart page once button is clicked
  document.querySelector("#mytable").style.display = "block";
  document.querySelector("#mydata").style.display = "none";
  document.querySelector("#mychart").style.display = "none";

  google.charts.load('current', {'packages':['table']});
  google.charts.setOnLoadCallback(drawTable);

  function drawTable() {
    let data = new google.visualization.DataTable();
    
    data.addColumn('string', 'Timestamp');
    data.addColumn('number', 'Value')
      
    
    pm25_data.forEach(item => {
      let row = [];
      let time = item['timestamp'];
      let val = item['value'];
      data.addRow([time, val]);
    });
    

    let table = new google.visualization.Table(document.getElementById('table_div'));

    table.draw(data, {showRowNumber: false, width: '100%', height: '100%'});
  }
    
})

