function validateForm() {
    let spans = document.getElementsByTagName("span");
    for (let span of spans) {
        span.innerHTML = "";
    }
    let isValid = true;


    let fullName = document.getElementById("fullName").value;
    fullName = fullName.trim();
    if (fullName === "") {
        document.getElementById("nameError").innerHTML = "Full name is required.";
        isValid = false;
    } else if (fullName.length < 2) {
        document.getElementById("nameError").innerHTML = "Full name must be at least 2 characters.";
        isValid = false;
    }

    let bdayInput = document.getElementById("birthDate").value;
    let birthDate = new Date(bdayInput);
    let today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();

    if (bdayInput === "") {
        document.getElementById("birthDateError").innerHTML = "Birth date is required.";
        isValid = false;
    } else if (age < 13) {
        document.getElementById("birthDateError").innerHTML = "You must be at least 13 years old.";
        isValid = false;
    }

    let sexInputs = document.getElementsByName("sex");
    let checked = 0;
    for (let i = 0; i < sexInputs.length; i++) {
        if (sexInputs[i].checked) {
            checked++;
        }
    }
    if (checked == 0) {
        document.getElementById("sexError").innerHTML = "Please select your sex.";
        isValid = false;
    }

    let email = document.getElementById("email").value;
    email = email.trim();

    if (email === "") {
        document.getElementById("emailError").innerHTML = "Email is required.";
        isValid = false;
    } else if (!email.includes("@") || !email.includes(".")) {
        document.getElementById("emailError").innerHTML = "Please enter a valid email address.";
        isValid = false;
    }

    let userName = document.getElementById("userName").value;
    userName = userName.trim();
    let regex = /^[a-zA-Z0-9]+$/;
    let errCnt = 0;

    if (userName === "") {
        document.getElementById("userNameError").innerHTML = "Username is required.";
        isValid = false;
    } else if (userName.length < 8 || userName.length > 20) {
        document.getElementById("userNameError").innerHTML = "Username must be between 8 and 20 characters.";
        isValid = false;
    } else {
        if (userName.includes(" ")) {
            document.getElementById("userNameError").innerHTML = "Username cannot contain spaces.";
            errCnt++;
            isValid = false;
        }
        if (!regex.test(userName)) {
            document.getElementById("userNameError").innerHTML = "Username cannot contain special characters.";
            errCnt++;
            isValid = false;
        }
        if (errCnt == 2) {
            document.getElementById("userNameError").innerHTML = "Username cannot contain spaces or special characters.";
            isValid = false;
        }
    }

    let password = document.getElementById("password").value;
    if (password === "") {
        document.getElementById("passwordError").innerHTML = "Password is required.";
        isValid = false;
    } else if (password.length < 10) {
        document.getElementById("passwordError").innerHTML = "Password must be at least 10 characters.";
        isValid = false;
    } else {
        let hasLower = /[a-z]/.test(password);
        let hasUpper = /[A-Z]/.test(password);
        let hasDigit = /\d/.test(password);
        let errCheck = 0;
        let err = [];

        if (!hasLower) {
            errCheck = 1;
            err.push(" one lowercase letter");
            isValid = false;
        }
        if (!hasUpper) {
            errCheck = 1;
            err.push(" one uppercase letter");
            isValid = false;
        }
        if (!hasDigit) {
            errCheck = 1;
            err.push(" one digit");
            isValid = false;
        }
        if (errCheck == 1) {
            document.getElementById("passwordError").innerHTML = "Password must include at least";
            for (let i = 0; i < err.length; i++) {
                if (i == err.length - 1 && i != 0) {
                    document.getElementById("passwordError").innerHTML += " and";
                } else if (i > 0) {
                    document.getElementById("passwordError").innerHTML += ",";
                }
                document.getElementById("passwordError").innerHTML += err[i];
            }
            document.getElementById("passwordError").innerHTML += ".";
            isValid = false;
        }
    }

    let confirmPw = document.getElementById("confirmPw").value;
    if (confirmPw === "") {
        document.getElementById("confirmPwError").innerHTML = "Please confirm your password.";
        isValid = false;
    } else if (confirmPw !== password) {
        document.getElementById("confirmPwError").innerHTML = "Passwords do not match.";
        isValid = false;
    }

    let q1Inputs = document.getElementsByName("q1");
    checked = 0;
    for (let i = 0; i < q1Inputs.length; i++) {
        if (q1Inputs[i].checked) {
            checked++;
        }
    }
    if (checked == 0) {
        document.getElementById("q1Error").innerHTML = "Please select 1 or more options.";
        isValid = false;
    }

    let q2Inputs = document.getElementsByName("q2");
    checked = 0;
    for (let i = 0; i < q2Inputs.length; i++) {
        if (q2Inputs[i].checked) {
            checked++;
        }
    }
    if (checked == 0) {
        document.getElementById("q2Error").innerHTML = "Please select an option.";
        isValid = false;
    }

    if (isValid) {
        document.getElementById("success").innerHTML = "Form submitted successfully!";
    }
    return isValid;
}