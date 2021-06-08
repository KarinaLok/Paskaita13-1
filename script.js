'use strict'

do {
  var price = prompt('Įveskite prekės kainą €');
  var price = Number(price);
} while (isNaN(price) || price <= 0);

console.log('Pasirinktos prekės kaina: ' + price.toFixed(2) + ' €');

function deliveryFunction() {
  var delivery = confirm('Ar reikalingas pristatymas į namus?');
  var deliveryPrice = 4;

if (delivery == true) {
    do {
      var deliveryCity = prompt('Į kurį miestą reiks pristatyti?')
    } while (deliveryCity <= 0);

    console.log('Pristatymas į namus: ' + deliveryPrice.toFixed(2) + ' €');
    console.log('Iš viso: ' + (deliveryPrice + price).toFixed(2) + ' €');
    console.log('Prekę pristatysime į ' + deliveryCity + ', per 1-3 dienas.');
  } else {
    console.log('Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1A');
  }
}
deliveryFunction();
