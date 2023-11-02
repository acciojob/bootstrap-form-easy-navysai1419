document.getElementById("internship-form").onsubmit = function(event) {
  let valid = true;

  const firstName = document.getElementById("first-name-input").value;
  if (!firstName) {
    valid = false;
    document.getElementById("first-name-input").classList.add("is-invalid");
    document.getElementById("first-name-error").textContent = "Please enter your first name.";
  }

  const lastName = document.getElementById("last-name-input").value;
  if (!lastName) {
    valid = false;
    document.getElementById("last-name-input").classList.add("is-invalid");
    document.getElementById("last-name-error").textContent = "Please enter your last name.";
  }

  const email = document.getElementById("email-input").value;
  if (!email || !email.includes("@")) {
    valid = false;
    document.getElementById("email-input").classList.add("is-invalid");
    document.getElementById("email-error").textContent = "Please enter a valid email address.";
  }

  const college = document.getElementById("college-input").value;
  if (!college) {
    valid = false;
    document.getElementById("college-input").classList.add("is-invalid");
    document.getElementById("college-error").textContent = "Please enter your college name.";
  }

  const rollNo = document.getElementById("roll-no-input").value;
  if (!rollNo) {
    valid = false;
    document.getElementById("roll-no-input").classList.add("is-invalid");
    document.getElementById("roll-no-error").textContent = "Please enter your roll number.";
  }

  const conditions = document.getElementById("conditions-checkbox").checked;
  if (!conditions) {
    valid = false;
    document.getElementById("conditions-checkbox").classList.add("is-invalid");
    document.getElementById("conditions-error").textContent = "You must agree to the conditions.";
  }

  if (!valid) {
    event.preventDefault(); // Prevent form submission if there are errors.
  }
};
