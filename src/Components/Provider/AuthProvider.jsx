import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../../public/firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import useApi from "../Hooks/useApi";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const apiUrl = useApi();
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  
  const userCreate = async (name, url, email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        const user = userCredential.user;
        return updateProfile(user, {
          displayName: name,
          photoURL: url,
        });
      }
    );
  };

  const googleCreateUser = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {const userEmail = currentUser?.email || user?.email;
      const loggedUser = {email: userEmail}

      setUser(currentUser);
      console.log('current user', currentUser);
      setLoading(false)
      if(currentUser){
          axios.post(`${apiUrl}/jwt`, loggedUser, {withCredentials: true})
          .then(res =>{
              console.log('token response',res.data)
          })
      }
      else{
          axios.post(`${apiUrl}/logout`, loggedUser, {withCredentials: true})
          .then(res =>{
              console.log(res.data);
          })
      }
  });
  return () =>{
      return unSubscribe();
  }
  }, []);
  

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme !== null) {
      setDarkMode(savedTheme === "true");
    }
  }, []);

  const updateTheme = (isDark) => {
    localStorage.setItem("darkMode", isDark);
    setDarkMode(isDark);
  };


  const authInfo = {
    user,
    loading,
    darkMode,
    userCreate,
    googleCreateUser,
    login,
    logOut,
    updateTheme
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
