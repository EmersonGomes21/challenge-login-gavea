import firebase from 'firebase/app';
import 'firebase/firebase-auth';
import provider from './firebaseConfig';
import Router from 'next/router';


if (!firebase.apps.length) {
  firebase.initializeApp(provider);
}

export default {

  emailPasswordRegister: async (email: string, password: string, name: string) => {
    const result =  await firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;

        //atualiza o nome do usuario
        const userCurrent = firebase.auth().currentUser;
        if (userCurrent) {
          userCurrent.updateProfile({
            displayName: name
          }).then(function () {

            // Update successful.
              console.log('Nome Atualizado com sucesso')
          }).catch(function (error) {
            // console.log('ERRO AO ATUALIZAR NOME')
          });


        }
        return user
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return errorMessage
      });

      return result
  },

  //criar o login
  emailPasswordSignin: async (email: string, password: string) => {
     const result = await firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;
       // console.log('Logado com sucesso', user);

        //Seta o primeiro nome do usuario logado no localstorage
        if (user?.displayName !== null) {
          var nameFiltered = user?.displayName.split(' ');

          if (nameFiltered !== undefined) {
            var firstName = nameFiltered[0];
            window.localStorage.setItem('@gavea-name-user', firstName);

          }

        }

        return user;
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log('ERROR CODE', errorCode);
        console.log('ERROR MESSAGE', errorMessage);

      });
      return result;
  },

  loGout: async (route?: string) => {
    await firebase.auth().signOut().then(() => {
      window.localStorage.removeItem('@gavea-name-user');
      window.localStorage.removeItem('@gavea-logado');
         route ?    Router.push(`${route}`) :  Router.push('/')
    }).catch((error) => {
      var errorMessage = error.message;
      return errorMessage
    });

  },

  //evento de "escuta" de usuario logado
  authStateListener: async () => {
        firebase.auth().onAuthStateChanged((user) => {
      if (user) {
          window.localStorage.setItem('@gavea-logado', user.displayName ? user.displayName : '')
      } else {
          window.localStorage.removeItem('@gavea-logado');

      }

    });

  }


}
