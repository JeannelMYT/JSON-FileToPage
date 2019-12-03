console.log("openJson.js running..");

//Store <header> as a variable
const header = document.querySelector('header');
//const section = document.querySelector('section');

//User to enter the JSON Source
let requestURL = prompt("Enter JSON Source");
console.log("Retrieving content from " + requestURL);

//Call HTTP GET Request
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

//Populate data from source into page
request.onload = function () {
    const testJson = request.response;
    populateHeader(testJson);
    //    showContent(testJson);
}

//Function to add data from source into Header of page
function populateHeader(jsonObj) {
    const myH1 = document.createElement('h1');
    //Change attributes to retrieve according to retrieved JSON's contents
    myH1.textContent = jsonObj['title']['rendered'];
    header.appendChild(myH1);
}