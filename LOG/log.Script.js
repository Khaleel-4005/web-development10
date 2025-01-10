document.addEventListener("DOMContentLoaded", function () {
    const signInBtn = document.querySelector(".sign-in-btn");
    signInBtn.addEventListener("click", function (event) {
        event.preventDefault();
        alert("Sign in functionality is not implemented yet.");
    });

    const googleBtn = document.querySelector(".google-btn");
    googleBtn.addEventListener("click", function () {
        alert("Google login functionality is not implemented yet.");
    });
});
