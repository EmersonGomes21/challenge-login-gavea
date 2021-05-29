import { createContext, useState } from 'react';
import Router  from 'next/router';
import firebase from '../lib/firebase';

const AuthContext = createContext();



export function AuthProvider ({
  children
 }: {
   children? : React.ReactNode;
 }

   )  {
  const [user, setUser] = useState< null | {}> (null);
  const [loading, setLoading] = useState(true);

  const signin = async ()  => {
    try {
      setLoading(true);
      return  await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then((response) => {
          setUser(response.user);
          Router.push('/home');
        });

    } finally {
      setLoading(false);
    }
    }

  const signout =  () => {
   try {
     Router.push('/');
     return  firebase.auth().signOut().then(() => setUser(false));
   } finally {
      setLoading(false);
    }
  }
  return <AuthContext.Provider value={{
    user,
    loading,
    signin,
    signout
  }}>{children}</AuthContext.Provider>;
}

export const AuthConsumer = AuthContext.Consumer;
export default AuthContext;
