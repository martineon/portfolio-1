  // Initialize Firebase
const firebase = require("firebase");
                 require("firebase/firestore");
const config = {
    apiKey: "AIzaSyCQsBbGUqij1ihpJrAE2yd3XDq15YRrFc0",
    authDomain: "kickass-stater.firebaseapp.com",
    databaseURL: "https://kickass-stater.firebaseio.com",
    projectId: "kickass-stater",
    storageBucket: "kickass-stater.appspot.com",
    messagingSenderId: "464982756235"
};
const fire = firebase.initializeApp(config);
export default fire