import firebase from 'firebase/app';
import 'firebase/firestore'

const settings = {timestampsInSnapshots: true}

const config = {
  apiKey: "AIzaSyBnbkq2H59ruLrDi6VMlcykro30Apk-j2s",
    authDomain: "coronavirus-page.firebaseapp.com",
    databaseURL: "https://coronavirus-page.firebaseio.com",
    projectId: "coronavirus-page",
    storageBucket: "coronavirus-page.appspot.com",
    messagingSenderId: "686041826334",
    appId: "1:686041826334:web:dc98ed68c4c4785225da0f",
    measurementId: "G-D1P93FHK93"
}
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
// firestore().settings({})


firebase.firestore().settings({});

export default firebase