const container = document.querySelector(".container"),
    pwShowHide = document.querySelectorAll(".showHidePw"),
    pwFields = document.querySelectorAll(".password"),
    signUp = document.querySelector(".signup-link"),
    login = document.querySelector(".login-link");

//   js code to show/hide password and change icon
pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        pwFields.forEach(pwField => {
            if (pwField.type === "password") {
                pwField.type = "text";

                pwShowHide.forEach(icon => {
                    icon.classList.replace("uil-eye-slash", "uil-eye");
                })
            } else {
                pwField.type = "password";

                pwShowHide.forEach(icon => {
                    icon.classList.replace("uil-eye", "uil-eye-slash");
                })
            }
        })
    })
})

// js code to appear signup and login form
signUp.addEventListener("click", () => {
    container.classList.add("active");
});
login.addEventListener("click", () => {
    container.classList.remove("active");
});

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBba4xve68Vq21g8k3JCa2xXliBiufxOOg",
    authDomain: "crystal-shopping-database.firebaseapp.com",
    databaseURL: "https://crystal-shopping-database-default-rtdb.firebaseio.com",
    projectId: "crystal-shopping-database",
    storageBucket: "crystal-shopping-database.appspot.com",
    messagingSenderId: "969167995602",
    appId: "1:969167995602:web:94ef5a264e17d3f320a30b"
};
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

function Insert() {
    Status = localStorage.getItem('status');
    if (Status == 'Logged Out') {
        Pass1 = document.getElementById('regPass1').value;
        Pass2 = document.getElementById('regPass2').value;
        username = document.getElementById('name').value;
        Mail = document.getElementById('mail').value;
        if (Pass1 == Pass2) {
            firebase.database().ref('users/').push({
                Name: username,
                Password: Pass1,
                Email: Mail
            });
            console.log('Done!');
            localStorage.setItem('status', 'Logged In');
            window.location = 'Home.html';

        }
        else {
            console.error('Passwords Not Matched!');
        }
    }
    else {
        window.location = 'Home.html';
    }
}
