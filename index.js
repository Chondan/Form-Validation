(() => {
    function onSubmit(e) {
        e.preventDefault();
        const email = emailInput.value;
        const password = passwordInput.value;
        let checkFormValidate = 0;
        // validation here
        const emailRegExpr = /.+@.+/;
        if(!emailRegExpr.exec(email)) {
            emailInput.focus();
            checkFormValidate++;
            emailValidation.classList.remove("hidden");
            setTimeout(() => {
                emailValidation.classList.add("hidden");
            }, 300);
        }
        const passwordRegExpr = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).{8,32}$/;
        if(!passwordRegExpr.exec(password)) {
            if (!checkFormValidate) {
                passwordInput.focus();
            }
            checkFormValidate++;
            passwordValidation.classList.remove("hidden");
            passwordDescription.classList.remove("hidden");
            setTimeout(() => {
                passwordValidation.classList.add("hidden");
                setTimeout(() => {
                    passwordDescription.classList.add("hidden");
                }, 2000);
            }, 300);

        }
        if (!checkFormValidate) {
            // document.body.removeChild(logInForm);
            document.body.innerHTML = "";
            document.write("Logged in");
        }
    }
    const emailInput = document.querySelector("input#email");
    const passwordInput = document.querySelector("input#password");
    const emailValidation = document.querySelector("div#email-validation");
    const passwordDescription = document.querySelector("div.description");
    const passwordValidation = document.querySelector("div#password-validation");
    const logInForm = document.querySelector("form#log-in");
    function App() {
        logInForm.addEventListener("submit", onSubmit);
    }
    App();
})();