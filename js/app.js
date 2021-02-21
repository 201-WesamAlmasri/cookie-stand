'use strict';

// list of open hours
let openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// Seattle object
let Seattle = {
  minHourlyCustomer: 23,
  maxHourlyCustomer: 63,
  averageCookiesPerCustomer: 6.3,
  cookiesAmountPerHour: [],
  getRandomCustomerNumber: function () {
    return Math.floor(Math.random() * (this.maxHourlyCustomer - this.minHourlyCustomer) + this.minHourlyCustomer);
  },
  getCookiesAmountPerHourPerHour: function () { // function to calclate the amount of cookies per hour
    return Math.round(this.getRandomCustomerNumber() * this.averageCookiesPerCustomer);
  },
};

// Tokyo object
let Tokyo = {
  minHourlyCustomer: 3,
  maxHourlyCustomer: 24,
  averageCookiesPerCustomer: 1.2,
  cookiesAmountPerHour: [],
  getRandomCustomerNumber: function () {
    return Math.floor(Math.random() * (this.maxHourlyCustomer - this.minHourlyCustomer) + this.minHourlyCustomer);
  },
  getCookiesAmountPerHourPerHour: function () { // function to calclate the amount of cookies per hour
    return Math.round(this.getRandomCustomerNumber() * this.averageCookiesPerCustomer);
  },
};

// Dubai object
let Dubai = {
  minHourlyCustomer: 11,
  maxHourlyCustomer: 38,
  averageCookiesPerCustomer: 3.7,
  cookiesAmountPerHour: [],
  getRandomCustomerNumber: function () {
    return Math.floor(Math.random() * (this.maxHourlyCustomer - this.minHourlyCustomer) + this.minHourlyCustomer);
  },
  getCookiesAmountPerHourPerHour: function () { // function to calclate the amount of cookies per hour
    return Math.round(this.getRandomCustomerNumber() * this.averageCookiesPerCustomer);
  },
};

// Paris object
let Paris = {
  minHourlyCustomer: 20,
  maxHourlyCustomer: 38,
  averageCookiesPerCustomer: 2.3,
  cookiesAmountPerHour: [],
  getRandomCustomerNumber: function () {
    return Math.floor(Math.random() * (this.maxHourlyCustomer - this.minHourlyCustomer) + this.minHourlyCustomer);
  },
  getCookiesAmountPerHourPerHour: function () { // function to calclate the amount of cookies per hour
    return Math.round(this.getRandomCustomerNumber() * this.averageCookiesPerCustomer);
  },
};

// Lima object
let Lima = {
  minHourlyCustomer: 2,
  maxHourlyCustomer: 16,
  averageCookiesPerCustomer: 4.6,
  cookiesAmountPerHour: [],
  getRandomCustomerNumber: function () {
    return Math.floor(Math.random() * (this.maxHourlyCustomer - this.minHourlyCustomer) + this.minHourlyCustomer);
  },
  getCookiesAmountPerHourPerHour: function () { // function to calclate the amount of cookies per hour
    return Math.ceil(this.getRandomCustomerNumber() * this.averageCookiesPerCustomer);
  },
};



// set cookies amount per hours for each location and save it in an array inside objects
function setAllCookiesAmount() {
  for (let hour = 0; hour < openHours.length; hour++){
    Seattle.cookiesAmountPerHour.push(Seattle.getCookiesAmountPerHourPerHour());
    Tokyo.cookiesAmountPerHour.push(Tokyo.getCookiesAmountPerHourPerHour());
    Dubai.cookiesAmountPerHour.push(Dubai.getCookiesAmountPerHourPerHour());
    Paris.cookiesAmountPerHour.push(Paris.getCookiesAmountPerHourPerHour());
    Lima.cookiesAmountPerHour.push(Lima.getCookiesAmountPerHourPerHour());
  }
}

setAllCookiesAmount();

// function to cretae a list for one location
function createLocationListElement(locationObject, name, containerElement) {
  let article = document.createElement('article');
  article.setAttribute('class', 'location_section');
  let p = document.createElement('p');
  p.innerText = name;
  let ul = document.createElement('ul');
  containerElement.appendChild(article);
  article.appendChild(p);
  article.appendChild(ul);
  let total = 0;
  for(let i = 0 ; i < openHours.length; i++){
    let li = document.createElement('li');
    li.innerText = openHours[i] + ': ' + locationObject.cookiesAmountPerHour[i] + ' cookies';
    ul.appendChild(li);
    total += locationObject.cookiesAmountPerHour[i];
  }
  let li = document.createElement('li');
  li.innerText = 'Total: ' + total + ' cookies';
  ul.appendChild(li);
}

// target the container element that will contain all the informations
let informationsContainer = document.getElementById('informations_container');

// create a list for each location
if (informationsContainer){
  createLocationListElement(Seattle, 'Seattle', informationsContainer);
  createLocationListElement(Tokyo, 'Tokyo', informationsContainer);
  createLocationListElement(Dubai, 'Dubai', informationsContainer);
  createLocationListElement(Paris, 'Paris', informationsContainer);
  createLocationListElement(Lima, 'Lima', informationsContainer);
}
