import firebase from 'firebase/app';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';
import provider from './firebaseConfig';
import Router from 'next/router';


if (!firebase.apps.length) {
  firebase.initializeApp(provider);
}

export default {
  emailPasswordRegister: async (email: string, password: string, name: string) => {
   await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user;

      //atualiza o nome do usuario
    const userCurrent =   firebase.auth().currentUser;
    userCurrent.updateProfile({
      displayName: name
    }).then(function() {

      // Update successful.
    //  console.log('Nome Atualizado com sucesso')
    }).catch(function(error) {
     // console.log('ERRO AO ATUALIZAR NOME')
    });

      Router.push('/signin');
      return user
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      return  errorMessage
    });
  },
  emailPasswordSignin: async (email: string, password: string) => {
    await firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {

        var user = userCredential.user;
         console.log('Logado com sucesso', user);
         Router.push('/home');

         if( user?.displayName !== null){
         let nameFiltered =  user?.displayName.split(' ');
         let  firstName = nameFiltered[0];
             window.localStorage.setItem('@gavea-name-user', firstName);
             console.log(firstName);
         }
         return user?.displayName;
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log('ERROR CODE', errorCode);
        console.log('ERROR MESSAGE', errorMessage);
        return errorMessage
      });

  },

  loGout: async () => {
    await firebase.auth().signOut().then(() => {
      console.log('Deslogado com sucesso');
      window.localStorage.removeItem('@gavea-name-user');
    }).catch((error) => {
      var errorMessage = error.message;
      return errorMessage
    });

  },

  authStateListener: async (urlOk : string = '/home', urlError: string = '/register') => {
      await firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        Router.push(`${urlOk}`);
        return user
      } else {
        Router.push(`${urlError}`);
        var errorMessage = 'usuario não autenticado'
        return errorMessage
      }

    });

  }


}
