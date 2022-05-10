function validate() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let phoneNumber = document.getElementById("phoneNumber").value;
  let state = document.getElementById("state").value;
  let zipCode = document.getElementById("zipCode").value;
  let firstNameInvalid = document.getElementById("firstNameInvalid")
  let firstNameValid = document.getElementById("firstNameValid")
  let lastNameInvalid = document.getElementById("lastNameInvalid")
  let lastNameValid = document.getElementById("lastNameValid")

  console.log(firstName, lastName, email, phoneNumber, state, zipCode);

  if (firstName === '') {
    firstNameInvalid.style.display = "block"
    firstNameValid.style.display ="none"
  } else {
    firstNameValid.style.display = "block"
    firstNameInvalid.style.display ="none"
  }

  if (lastName === '') {
    lastNameInvalid.style.display = "block"
    lastNameValid.style.display ="none"
  } else {
    lastNameValid.style.display = "block"
    lastNameInvalid.style.display ="none"
  }
}