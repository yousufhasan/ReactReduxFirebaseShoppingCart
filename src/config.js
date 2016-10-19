

export const FIREBASE_CONFIG = {
    apiKey: "AIzaSyBozd5stkhvRJR855cPs8ma92kqbh3NOTQ",
    authDomain: "sajao-f63ea.firebaseapp.com",
    databaseURL: "https://sajao-f63ea.firebaseio.com",
    storageBucket: "sajao-f63ea.appspot.com",
}

 export const firebaseApp  = firebase.initializeApp(FIREBASE_CONFIG);
 export const firebaseDb = firebaseApp.database();




