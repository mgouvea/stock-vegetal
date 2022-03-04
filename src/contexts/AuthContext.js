import { createContext, useState } from 'react';
import { useRouter } from 'next/router';
// import firebase from '../services/firebase';
import { firebase, auth } from '../services/firebase';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const router = useRouter();

  const [user, setUser] = useState();
  const [loading, setLoading] = useState();

  const sigInGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await auth.signInWithPopup(provider);
    router.push('/dashboard');
    console.log('user', result);

    return result;
  };

  const signIn = () => {
    try {
      return firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then((response) => {
          router.push('/dashboard');
          setUser(response.user);
          console.log('success', response);
        });
    } catch (err) {
      console.log('error', err.message);
      // setLoading(false);
    }

    // firebase
    //   .auth()
    //   .signInWithEmailAndPassword(email, password)
    //   .then((response) => {
    //     setUser(response);
    //     router.push('/dashboard');

    //     console.log('success', response);
    //   })
    //   .catch((error) => {
    //     console.log('error', error.message);
    //   });
  };

  const signOut = () => {
    try {
      router.push('/');

      return firebase
        .auth()
        .signOut()
        .then(() => setUser(false));
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signIn,
        // sigInGoogle,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const AuthConsumer = AuthContext.Consumer;

export default AuthContext;
