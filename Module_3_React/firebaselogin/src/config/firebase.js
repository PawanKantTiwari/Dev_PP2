import firebase from "firebase";

let firebaseConfig = {
    apiKey: "AIzaSyBNTLV-s2GWiMADHaTSmldsaBnFz7FkmNk",
    authDomain: "react-login-9cf13.firebaseapp.com",
    projectId: "react-login-9cf13",
    storageBucket: "react-login-9cf13.appspot.com",
    messagingSenderId: "650975675199",
    appId: "1:650975675199:web:0cc887e14e86ef6f97498a"
};
let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebase.auth();

export default firebaseAuth;
