// Function to display the email input value in an alert
function alertSubFunc(event) {
  let emailInput = document.getElementById("email");
  alert("Subscriber \"added\": " + emailInput.value);
}

// Add event listener to the form when the window loads
window.onload = function() {
  document.getElementById("subscribe-form").addEventListener("submit", alertSubFunc);
}