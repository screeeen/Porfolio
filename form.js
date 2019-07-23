'use strict'

var burguer = document.getElementById('burguer');
var budget= document.getElementById('budget')
var thankYou = document.querySelector('.thank-you')
var contactForm = document.getElementById('serverless-contact-form')
var backToForm = document.getElementsByClassName('back-to-form')[0]
var menuAndForm = document.getElementById('utilityColumn');

// Adds an event listener to our form. When the form is submitted, it will send data to our Lambda function, which in turn, will send us an email.
contactForm.addEventListener('submit', sendDataToLambda);
backToForm.addEventListener('click',showForm);
burguer.addEventListener('click',removeSticky);

// Now for the good stuff. This is the function that will send our data to AWS.
function sendDataToLambda(e) {
  e.preventDefault();
  // Gets the values of each field in our form. This is the data we'll send to our Lambda function.
  var formName = document.querySelector('#name').value;
  var formCompany = document.querySelector('#company').value;
  var formEmail = document.querySelector('#email').value;
  var formBudget = document.querySelector('#budget').value;
  var formMessage = document.querySelector('#message').value;
  // This is the endpoint we created in our API Gateway. This is where we make our POST request, which calls our Lambda function.
  var endpoint = 'https://t5s6zttfe0.execute-api.us-east-1.amazonaws.com/prod/contactme';

  // document.getElementById('serverless-contact-form').reset();

  // Remember those form values we just grabbed? We're going to put them into an object here.
  var body = {
    name: formName,
    company: formCompany,
    email: formEmail,
    budget: formBudget,
    message: formMessage
  }
  // Here, we instantiate our Request. This is a special object used by the Fetch API so it knows where to send data, what data to send, and how to send it.
  var lambdaRequest = new Request(endpoint, {
    method: 'POST',
    // Quick note: 'no-cors' mode is for development on localhost only!
    mode: 'no-cors',
    body: JSON.stringify(body)
  });

  // Call the Fetch API to make our request
  fetch(lambdaRequest)
    // This is where you can handle errors. This is just an example, so we won't cover that.
    .then(response => console.log(response))
    .catch(err => console.log(err));

      hideForm();
      showFeedback();
}

async function hideForm() {
  await document.getElementById('serverless-contact-form').classList.add("fade-out");
  await document.getElementById('budget').setAttribute("disabled",true);
  await document.getElementById('serverless-contact-form').setAttribute("disabled",true);
}

async function showFeedback(){
  document.querySelector('.thank-you').removeAttribute("hidden");
  document.querySelector('.thank-you').classList.add("fade-in");
}

async function showForm() {
  document.getElementById('serverless-contact-form').classList.add("fade-in");
  document.getElementById('serverless-contact-form').setAttribute("disabled",false);

}

async function hideFeedback() {
  document.querySelector('.thank-you').classList.add("fade-out");
  document.querySelector('.thank-you').setAttribute("hidden",true);
  
}

function removeSticky() {
  menuAndForm.classList.remove("sticky-top");
}

function addSticky() {
  menuAndForm.classList.add("sticky-top");
}
