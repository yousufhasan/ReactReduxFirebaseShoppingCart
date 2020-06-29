

export const FIREBASE_CONFIG = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DB_URL,
    storageBucket: process.env.STORAGE_BUCKET,
}

 export const firebaseApp  = firebase.initializeApp(FIREBASE_CONFIG);
 export const firebaseDb = firebaseApp.database();




