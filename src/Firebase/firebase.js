import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAWBuG9HyNpdxZ0eEHCzlz_YbZ4U7KVQ3g",
    authDomain: "clone-a012c.firebaseapp.com",
    projectId: "clone-a012c",
    storageBucket: "clone-a012c.appspot.com",
    messagingSenderId: "786341063388",
    appId: "1:786341063388:web:bff1a4dc0f68ae26902219",
    measurementId: "G-3WLMGCWN0W"

})

const auth = firebaseApp.auth();
export { auth };