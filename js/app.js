'use strict';

let openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// constructor function
function Branch(name, minHourlyCustomer, maxHourlyCustomer, averageCookiesPerCustomer) {
  this.name = name;
  this.minHourlyCustomer = minHourlyCustomer;
  this.maxHourlyCustomer = maxHourlyCustomer;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;
  this.cookiesAmountPerHour = [];
  this.totalCookiesPerDay = 0;
}

// function to get random nuber of customer
Branch.prototype.getRandomCustomerNumber = function () {
  return Math.floor(Math.random() * (this.maxHourlyCustomer - this.minHourlyCustomer) + this.minHourlyCustomer);
};

// function to calclate the amount of cookies per hour
Branch.prototype.getCookiesAmountPerHourPerHour = function () {
  return Math.round(this.getRandomCustomerNumber() * this.averageCookiesPerCustomer);
};

// function to set the cookies amount needed per hour in the array
Branch.prototype.setCookiesAmountPerHour = function () {
  for (let hour = 0; hour < openHours.length; hour++){
    this.cookiesAmountPerHour.push(this.getCookiesAmountPerHourPerHour());
  }
};

// function to calclate the amount of cookies per hour
Branch.prototype.setTotalCookiesPerDay = function () {
  let total = 0;
  for(let i = 0; i < this.cookiesAmountPerHour.length; i++){
    total = total + this.cookiesAmountPerHour[i];
  }
  this.totalCookiesPerDay = total;
};

// function to create a list for one Branch
Branch.prototype.render = function () {
  // target the table that will contain all info
  const tableElement = document.getElementById('sales_table');
  if(tableElement){
    const trElement = document.createElement('tr');
    tableElement.appendChild(trElement);
    const tdNameElement = document.createElement('td');
    tdNameElement.textContent = this.name;
    trElement.appendChild(tdNameElement);
    for(let i = 0; i < openHours.length; i++){
      const tdElement = document.createElement('td');
      tdElement.textContent = this.cookiesAmountPerHour[i];
      trElement.appendChild(tdElement);
    }
    const tdTotalElement = document.createElement('td');
    this.setTotalCookiesPerDay();
    tdTotalElement.textContent = this.totalCookiesPerDay;
    trElement.appendChild(tdTotalElement);
  }
};

// functoin to create the header
function createTableHeader() {
  // target the table that will contain all info
  const divContainerEl = document.getElementById('information_container');
  const tableElement = document.createElement('table');
  tableElement.setAttribute('id', 'sales_table');
  divContainerEl.appendChild(tableElement);
  const trHeadElement = document.createElement('tr');
  const thEmptyElement = document.createElement('th');
  trHeadElement.appendChild(thEmptyElement);
  for(let i = 0; i < openHours.length; i++){
    const thElement = document.createElement('th');
    thElement.textContent = openHours[i];
    trHeadElement.appendChild(thElement);
  }
  const thTotalElement = document.createElement('th');
  thTotalElement.textContent = 'Location Total';
  trHeadElement.appendChild(thTotalElement);
  tableElement.appendChild(trHeadElement);
}

// functoin to create the footer
function createTablefooter(branchs) {
  // target the table that will contain all info
  const tableElement = document.getElementById('sales_table');
  const trFootElement = document.createElement('tr');
  const thTotalElement = document.createElement('th');
  thTotalElement.textContent = 'Totals';
  trFootElement.appendChild(thTotalElement);
  for(let i = 0; i < openHours.length; i++){
    const thElement = document.createElement('th');
    let totalCookiesPerHour = 0;
    for(let j = 0; j < branchs.length; j++){
      totalCookiesPerHour = totalCookiesPerHour + branchs[j].cookiesAmountPerHour[i];
    }
    thElement.textContent = totalCookiesPerHour;
    trFootElement.appendChild(thElement);
  }
  let totalCookiesPerDay = 0;
  for(let k = 0; k < branchs.length; k++){
    totalCookiesPerDay = totalCookiesPerDay + branchs[k].totalCookiesPerDay;
  }
  const thTotalDayElement = document.createElement('th');
  thTotalDayElement.textContent = totalCookiesPerDay;
  trFootElement.appendChild(thTotalDayElement);
  tableElement.appendChild(trFootElement);
}


// Seattle instance
const seattle = new Branch('Seattle', 23, 63, 6.3);
// Tokyo instance
const tokyo = new Branch('Tokyo', 3, 24, 1.2);
// Dubai instance
const dubai = new Branch('Dubai', 11, 38, 3.7);
// Paris instance
const paris = new Branch('Paris', 20, 38, 2.3);
// Paris instance
const lima = new Branch('Lima', 2, 16, 4.6);


// store all Branchs in an array
let branchs = [seattle, tokyo, dubai, paris, lima];

if(document.getElementById('information_container')){
  // call function to render the header of the table
  createTableHeader();

  // call render functions for each instance
  for(let branch = 0; branch < branchs.length; branch++){
    branchs[branch].setCookiesAmountPerHour();
    branchs[branch].render();
  }

  createTablefooter(branchs);
}

// submitt event listener

const formElement = document.getElementById('locationForm');
if(formElement){
  formElement.addEventListener('submit', handleSubmitt);
}

// function to handle submit event

function handleSubmitt(event) {
  event.preventDefault();
  const newInstance = new Branch(
    event.target.name.value,
    event.target.min_customer.value,
    event.target.max_customer.value,
    event.target.avg_cookies_per_customer.value
  );
  branchs.push(newInstance);
  document.querySelector('table tr:last-child').remove();
  newInstance.setCookiesAmountPerHour();
  newInstance.render();
  createTablefooter(branchs);
}

// code for slider image

let slideIndex = 0;
carousel();

function carousel() {
  let i;
  let x = document.getElementsByClassName('mySlides');
  if(x.length > 0){
    for (i = 0; i < x.length; i++) {
      x[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1;}
    x[slideIndex-1].style.display = 'block';
    setTimeout(carousel, 2000); // Change image every 2 seconds
  }
}
