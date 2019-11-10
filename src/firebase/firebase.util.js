import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCcElnaA5kblRTE-HBV3JFr3t8IshiyCwI",
    authDomain: "ecomm-app-47aa6.firebaseapp.com",
    databaseURL: "https://ecomm-app-47aa6.firebaseio.com",
    projectId: "ecomm-app-47aa6",
    storageBucket: "ecomm-app-47aa6.appspot.com",
    messagingSenderId: "842452814160",
    appId: "1:842452814160:web:c02d3eca9a0d1e3b6ec455",
    measurementId: "G-M40LNMVY1R"
  };

//   const config = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.FIREBASE_DATABASE_URL,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER
//   }

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapshot = await userRef.get()

    // console.log(snapshot)

    if(!snapshot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date()
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('error creating user', error.message)
        }
    }

    console.log(userRef)
    return userRef;
    //await
 }

  firebase.initializeApp(config)

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({prompt:'select_account'})

  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase;