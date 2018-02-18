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

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
