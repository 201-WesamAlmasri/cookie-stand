'use strict';

// constructor function
function Branch(name, minHourlyCustomer, maxHourlyCustomer, averageCookiesPerCustomer, openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']) {
  this.name = name;
  this.openHours = openHours;
  this.minHourlyCustomer = minHourlyCustomer;
  this.maxHourlyCustomer = maxHourlyCustomer;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;
  this.cookiesAmountPerHour = [];
  this.getRandomCustomerNumber = function () {
    return Math.floor(Math.random() * (this.maxHourlyCustomer - this.minHourlyCustomer) + this.minHourlyCustomer);
  };
  // function to calclate the amount of cookies per hour
  this.getCookiesAmountPerHourPerHour = function () {
    return Math.round(this.getRandomCustomerNumber() * this.averageCookiesPerCustomer);
  };
  this.setCookiesAmountPerHour = function () {
    for (let hour = 0; hour < this.openHours.length; hour++){
      this.cookiesAmountPerHour.push(this.getCookiesAmountPerHourPerHour());
    }
  };
  // function to create a list for one Branch
  this.render = function () {
    let containerElement = document.getElementById('informations_container'); // target the container element that will contain all the informations
    if(containerElement){
      let article = document.createElement('article');
      article.setAttribute('class', 'location_section');
      let p = document.createElement('p');
      p.innerText = this.name;
      let ul = document.createElement('ul');
      containerElement.appendChild(article);
      article.appendChild(p);
      article.appendChild(ul);
      let total = 0;
      for(let i = 0 ; i < this.openHours.length; i++){
        let li = document.createElement('li');
        li.innerText = this.openHours[i] + ': ' + this.cookiesAmountPerHour[i] + ' cookies';
        ul.appendChild(li);
        total += this.cookiesAmountPerHour[i];
      }
      let li = document.createElement('li');
      li.innerText = 'Total: ' + total + ' cookies';
      ul.appendChild(li);
    }
  };
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

// function to simualte the sale process through day and render it on the web page
function simualte() {
  for (let branch = 0; branch < branchs.length; branch++){
    branchs[branch].setCookiesAmountPerHour();
    branchs[branch].render();
  }
}

simualte();
