import firebase from 'firebase/app';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';
import provider from './firebaseConfig';

if (!firebase.apps.length) {
 firebase.initializeApp(provider);
}

  export default {
    emailPasswordSignin: async (email : string, password : string)  => {
    await firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log('Logado com sucesso',  user);
      return user;
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log('ERROR CODE', errorCode);
      console.log('ERROR MESSAGE', errorMessage);
      return  errorCode
    });

    }
  }
