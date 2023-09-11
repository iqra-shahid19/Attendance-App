
//setting up firbase with our website
    const firebaseApp = firebase.initializeApp({ 
    apiKey: "AIzaSyCxCPpvERYFaIl0t5bCxhFiW6Jb7t3iflA",
    authDomain: "auth-form-77d56.firebaseapp.com",
    projectId: "auth-form-77d56",
    storageBucket: "auth-form-77d56.appspot.com",
    messagingSenderId: "643762162759",
    appId: "1:643762162759:web:bce0090cb8d8fe77f7f562"
    });
   const db = firebaseApp.firestore();
   const auth = firebaseApp.auth();
   
   //signin function 
  const signIn = ()=>{
  const email = document.getElementById("email").value
  const password =document.getElementById('password').value;
  //firebase
  firebase.auth().signInWithEmailAndPassword(email, password)
.then((result) => {
  // Signed in
  window.location.href = "admin.html";
  console.log("result")
  // ...
})
.catch((error) => {
  console.log(error.code)
  console.log(error.message)
});
}

// Function to validate email
function validateEmail(email) {
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return emailRegex.test(email);
}

// Function to validate first and last name (no special characters or numbers)
function validateName(name) {
const nameRegex = /^[a-zA-Z]+$/;
return nameRegex.test(name);
}

// Modify the signUp function to include name validation
const signUp = () => {
const firstName = document.getElementById("first-name").value;
const lastName = document.getElementById("last-name").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

if (!validateName(firstName)) {
  alert("Please enter a valid First Name.");
  return;
}

if (!validateName(lastName)) {
  alert("Please enter a valid Last Name.");
  return;
}

if (!validateEmail(email)) {
  alert("Please enter a valid Email.");
  return;
}

// Continue with Firebase signup code
firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((result) => {
    // Signed in
    document.write("You Are Signed up");
  })
  .catch((error) => {
    console.log(error.code);
    console.log(error.message);
  });
};
