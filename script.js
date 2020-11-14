// A simple form validation project.  All fields are required.
// id for javascript, class for styling.

// 1. Grab the DOM elements

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Functions

// Show input error message
function showError(input, message) {
  // need the parent
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Show Success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Check email is valid

function isValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// check required fields by passing in an array
// loop through array checking each one
// user higher order array method instead of a for loop
// trim takes out whitespace
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    // console.log(input.id);
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Get fieldname and capitalize 1st letter
// take 1st letter make uppercase then add it to the word minus the 1st letter

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event Listeners

// submit functionality - listen for submit, run function
form.addEventListener('submit', function (e) {
  // stop submitting
  e.preventDefault();

  checkRequired([username, email, password, password2]);
});
