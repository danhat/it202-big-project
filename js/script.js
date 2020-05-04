
mdc.ripple.MDCRipple.attachTo(document.querySelector('.data-button'));

mdc.ripple.MDCRipple.attachTo(document.querySelector('.chart-button'));

mdc.ripple.MDCRipple.attachTo(document.querySelector('.map-button'));

mdc.topAppBar.MDCTopAppBar.attachTo(document.querySelector('header.mdc-top-app-bar'));
      
const drawer = mdc.drawer.MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));

document.querySelector('.mdc-top-app-bar__navigation-icon')
.addEventListener(
  'click', 
  (e) => {
    drawer.open = true;
  }
);


document.querySelectorAll('aside.mdc-drawer a.mdc-list-item').forEach(item => {

  item.addEventListener(
    'click',
    event => {
      let selected = item.getAttribute('href');
      if (selected == '#mydata') {
        document.querySelector("#mydata").style.display = "block";
        document.querySelector("#mychart").style.display = "none";
        document.querySelector("#mymap").style.display = "none";
        drawer.open = false;
      }
      if (selected == '#mymap') {
        document.querySelector("#mymap").style.display = "block";
        document.querySelector("#mydata").style.display = "none";
        document.querySelector("#mychart").style.display = "none";
        let table_button = document.querySelector('.map-button');
        table_button.click();
        drawer.open = false;
      }
      if (selected == '#mychart') {
        document.querySelector("#mychart").style.display = "block";
        document.querySelector("#mydata").style.display = "none";
        document.querySelector("#mymap").style.display = "none";
        let chart_button = document.querySelector('.chart-button');
        chart_button.click();
        drawer.open = false;
      }
    }
  )       
});







