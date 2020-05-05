


let url = 'https://api-of-things.plenar.io/api/observations?sensor=alphasense.opc_n2.pm2_5&size=200';

let pm25_data;
fetch(url).then(response => {return response.json();})
  .then(json => {
    //console.log(json['data']);
    pm25_data = json['data'];      
  }
);


let url2 = 'https://api-of-things.plenar.io/api/observations?sensor=alphasense.opc_n2.pm1&size=200';
let pm1_data;
fetch(url2).then(response => {return response.json();})
  .then(json => {
    pm1_data = json['data'];
  }
);


let url3 = 'https://api-of-things.plenar.io/api/observations?sensor=chemsense.so2.concentration&size=200';
let so2_data;
fetch(url3).then(response => {return response.json();})
  .then(json => {
    so2_data = json['data'];
  }
);



let url4 = 'https://api-of-things.plenar.io/api/observations?sensor=chemsense.o3.concentration&size=200';
let o3_data;
fetch(url4).then(response => {return response.json();})
  .then(json => {
    o3_data = json['data'];
  }
);


let url5 = 'https://api-of-things.plenar.io/api/observations?sensor=chemsense.no2.concentration&size=200';
let no2_data;
fetch(url5).then(response => {return response.json();})
  .then(json => {
    no2_data = json['data'];
  }
);


let url6 = 'https://api-of-things.plenar.io/api/observations?sensor=chemsense.h2s.concentration&size=200';
let h2s_data;
fetch(url6).then(response => {return response.json();})
  .then(json => {
    h2s_data = json['data'];
  }
);




let url7 = 'https://api-of-things.plenar.io/api/observations?sensor=chemsense.co.concentration&size=200';
let co_data;
fetch(url7).then(response => {return response.json();})
  .then(json => {
    co_data = json['data'];
  }
);


let data_button = document.querySelector('.data-button');
  
data_button.addEventListener('click', (e) => {
  data_button.innerHTML = 'Refresh Data';
 
  fetch(url).then(response => {return response.json();})
    .then(json => {
      //console.log(json['data']);
      pm25_data = json['data'];      
    }
  );

  fetch(url2).then(response => {return response.json();})
    .then(json => {
      pm1_data = json['data'];
    }
  );


  fetch(url3).then(response => {return response.json();})
    .then(json => {
      so2_data = json['data'];
    }
  );



  fetch(url4).then(response => {return response.json();})
    .then(json => {
      o3_data = json['data'];
    }
  );


  fetch(url5).then(response => {return response.json();})
    .then(json => {
      no2_data = json['data'];
    }
  );


  fetch(url6).then(response => {return response.json();})
    .then(json => {
      h2s_data = json['data'];
    }
  );



  fetch(url7).then(response => {return response.json();})
    .then(json => {
      co_data = json['data'];
    }
  );
  
  
})



















