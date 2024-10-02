//This script is for the processing of the signing up of users.
console.log('script loaded');
const signUpForm = document.querySelector("#signupForm");
signUpForm.addEventListener('submit', function (e) {
    e.preventDefault();//prevents the browser from refreshing on form submit loosing the user data
    console.log('clicked');
    //grabbing the data from the form to be passed
    const username = document.querySelector("#create-username").value;//grabbing the value in the input box;
    const password = document.querySelector("#create-password").value;

    //here we process the from handeling logic and pass to firebase
    if (!username || !password) {
        console.log('pass');


        return;//stop form submission if fields are empty
    }

    console.log('Form submitted:', { username, password });


})