var allValid = false;

//Query Selectors
var email = document.getElementById("email");
var country = document.getElementById("country");
var zipCode = document.getElementById("zipCode");
var password1 = document.getElementById("password1");
var password2 = document.getElementById("password2");
var submitBtn = document.getElementById("submitBtn");

//Event Listeners
email.addEventListener("input", checkError);
country.addEventListener("input", checkError);
zipCode.addEventListener("input", checkError);
password1.addEventListener("input", checkError);
password2.addEventListener("input", checkError);
submitBtn.addEventListener("click", submitClick)


//Functions
function checkError() {
    thisError = document.querySelector(`#${this.id}Error`);
    //Check if passwords match
    if (this.id.toString() == "password2") {
        if (password2.value == password1.value) {
            thisError.textContent = "";
        } else if (password2.value !== password1.value) {
            thisError.textContent = "You have not entered your password correctly. Make sure your passwords match";
        }
    //If valid, no errors.
    } else if (this.validity.valid) {
        thisError.innerHTML = "";
        thisError.className = "error";
    //If invalid, show error.
    } else {
        showError(this.id);
    }
}

function showError(thisId) {
    var thisError = document.querySelector(`#${thisId}Error`)
    thisError.className = "errorActive"

    if (thisId.toString() == "email") {
        if(email.validity.valueMissing) {
            thisError.textContent = "Please enter an e-mail address";
        } else if (email.validity.typeMismatch) {
            thisError.textContent = "Entered value needs to be a valid e-mail address";
        }
    } else if (thisId.toString() == "country") {
        if(country.validity.valueMissing) {
            thisError.textContent = "Please enter a country";
        } else if (country.validity.patternMismatch) {
            thisError.textContent = "Please enter a valid country";
        }
    } else if (thisId.toString() == "zipCode") {
        if (zipCode.validity.valueMissing) {
            thisError.textContent = "Please enter a Zip Code";
        } else if (zipCode.validity.patternMismatch) {
            thisError.textContent = "Please enter a valid Zip Code";
        }
    } else if (thisId.toString() == "password1") {
        if (password1.validity.valueMissing) {
            thisError.textContent = "Please enter a password";
        } else if (password1.validity.tooShort) {
            thisError.textContent = "Your password is too short. Please enter a longer password";
        }
    }  
}

function submitClick() {
    if (email.validity.valid && country.validity.valid && zipCode.validity.valid && password1.validity.valid && password1.value.toString() == password2.value.toString()) {
    //Need a function to push the values to the server
    alert("High Five!");
    } else {
        return;
    }
}

// function checkAllValid() {
//     if (email.validity.valid && country.validity.valid && zipCode.validity.valid && password1.validity.valid && password1.toString() == password2.toString()) {
//         return true;
//     } else {
//         return false;
//     }
// }