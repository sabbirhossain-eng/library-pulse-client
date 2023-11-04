import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../../public/firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';


export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    const userCreate = (name, url, email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, name, url, email, password)
    }

    const googleCreateUser = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
       }

       const login = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
       }

       const logOut = () =>{
        setLoading(true)
        return signOut(auth);
       }

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false)
        })
        return () =>{
            unSubscribe();
        }
       },[])
    
    const authInfo ={
        user,
        loading,
        userCreate,
        googleCreateUser,
        login,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes ={
    children: PropTypes.node
}
export default AuthProvider;