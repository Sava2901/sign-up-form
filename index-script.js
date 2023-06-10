const first_name = document.querySelector("#first_name");
const last_name = document.querySelector("#last_name");
const email = document.querySelector("#email");
const phone_number = document.querySelector("#phone_number");
const pw1 = document.querySelector("#password");
const pw2 = document.querySelector("#confirm_password");
const form = document.querySelector(".forms");
const errorElement = document.querySelector(".error");

form.addEventListener("submit", (e) => {
    let message;

    if(pw2.value === "" || pw2.value === null)
    {
        message = "Confirmation for the password is requiered.";
    }

    if(pw1.value === "" || pw1.value === null)
    {
        message = "Password is requiered.";
    }

    if(phone_number.value === "" || phone_number.value === null)
    {
        message = "Phone number is requiered.";
        phone_number.style.borderColor = "red";
    }
    else
    {
        phone_number.style.borderColor = "green";
    }

    if(email.value === "" || email.value === null)
    {
        message = "Email is requiered.";
        email.style.borderColor = "red";
    }
    else
    {
        email.style.borderColor = "green";
    }

    if(last_name.value === "" || last_name.value === null)
    {
        message = "Last Name is requiered.";
        last_name.style.borderColor = "red";
    }
    else
    {
        last_name.style.borderColor = "green";
    }

    if(first_name.value === "" || first_name.value === null)
    {
        message = "First Name is requiered.";
        first_name.style.borderColor = "red";
    }
    else
    {
        first_name.style.borderColor = "green";
    }

    if(message != null) 
    {
        e.preventDefault();
        errorElement.textContent = message;
    }
    else if(pw1.value !== pw2.value)
    {
        e.preventDefault();
        errorElement.textContent ="Passwords do not match";
        pw1.style.borderColor = "red";
        pw2.style.borderColor = "red";
    }
});