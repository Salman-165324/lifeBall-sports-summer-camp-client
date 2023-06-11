import { createContext,  useEffect,  useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firbase.config';

export const AuthContext = createContext(null); 

const AuthProviders = ({children}) => {
    
    const auth = getAuth(app);
    const [user, setUser] = useState(null); 
    const [loading, setLoading] = useState(true); 

    const googleProvider = new GoogleAuthProvider(); 

    // method for google signIn 
    const googleSignIn = () => {
        setLoading(true); 
        return signInWithPopup( auth, googleProvider); 
    }

    const logout = () =>{
        setLoading(true)
        return signOut(auth); 
    }

    const signUpWithPassword = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password); 
    }

    const logInWithPassword = (email, password) =>{

        setLoading(true); 
        return signInWithEmailAndPassword(auth, email, password); 
    }    

    const addUserNameAndPicture = (name, photoURL) =>{

          return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: photoURL, 
          }); 
    }


    useEffect( () => {

        const unsubscribe = onAuthStateChanged( auth, currentUser => {

                setUser(currentUser); 
                console.log(currentUser); 
                setLoading(false); 

        } )

        return () => {
            unsubscribe(); 
        }

    },[auth])


    const authDetails = {

        user, 
        loading, 
        googleSignIn, 
        logout, 
        signUpWithPassword,
        logInWithPassword, 
        addUserNameAndPicture, 

    }
    return (
        <AuthContext.Provider  value={authDetails}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;