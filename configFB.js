import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyDMpzEFwY9Ceo0BZS12cBfcXSx8tuzCGck",
    authDomain: "overheard-lancs.firebaseapp.com",
    databaseURL: "https://overheard-lancs.firebaseio.com",
    projectId: "overheard-lancs",
    storageBucket: "overheard-lancs.appspot.com",
    messagingSenderId: "47348547434"
};


if (!firebase.apps.length) {//for some reaseon it was initializing twice and give out an error, now it dont
    firebase.initializeApp(config);
    firebase.firestore().settings({})
}
export default firebase