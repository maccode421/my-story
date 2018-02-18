const create = require('./create')

// function to check email & password
function check(form) {
  // the following code checkes whether the entered email and password are matching
  if (form.email.value == "myemail" && form.password.value == "mypassword") {
    // opens the target page while email & password matches
    window.open('target.html')
  } else {
    // displays error message
    alert("Error Password or Email")
  }
}
