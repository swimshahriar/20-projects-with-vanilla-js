const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show Error Handler
const showError = (username, message) => {
  const formControl = username.parentElement;
  const small = formControl.querySelector('small');

  formControl.className = 'form-control error';
  small.innerText = message;
};

// Show Success Handler
const showSuccess = (username) => {
  const formControl = username.parentElement;

  formControl.className = 'form-control success';
};

// Field Name
const fieldName = (input) => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};

// Required Input check
const checkRequired = (inputArr) => {
  inputArr.forEach((input) => {
    if (input.value.trim() === '') {
      showError(input, `${fieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
};

// Email Valid check
const checkEmail = (input) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(String(email.value).trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
};

// Length check
const checkLength = (input, min, max) => {
  if (input.value.length < min) {
    showError(input, `${fieldName(input)} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${fieldName(input)} must be less than ${max} characters`);
  } else {
    showSuccess(input);
  }
};

// Match Passwords check
const checkPasswordsMatch = (input1, input2) => {
  if (input1.value !== input2.value) {
    showError(
      input2,
      `${fieldName(input2)} doesn't match with ${fieldName(input1)}`
    );
  } else {
    showSuccess(input2);
  }
};

// Event Listener
form.addEventListener('submit', (event) => {
  event.preventDefault();

  checkRequired([username, email, password, password2]);
  checkEmail(email);
  checkLength(username, 3, 15);
  checkLength(password, 6, 12);
  checkPasswordsMatch(password, password2);
});
