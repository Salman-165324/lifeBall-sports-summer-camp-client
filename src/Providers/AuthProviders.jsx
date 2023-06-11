import { createContext,  useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firbase.config';

export const AuthContext = createContext(null); 

const AuthProviders = ({children}) => {
    
    const auth = getAuth(app);
    const [user, setUser] = useState(null); 
    const [loading, setLoading] = useState(true); 

    const googleProvider = new GoogleAuthProvider(); 

    // method for google signIn 
    const googleSignIn = () => {
        return signInWithPopup( auth, googleProvider); 
    }

    
    const authDetails = {

        user, 
        loading, 
        googleSignIn, 


    }
    return (
        <AuthContext.Provider  value={authDetails}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;