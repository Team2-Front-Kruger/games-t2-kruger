import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";


export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    if(!context) throw new Error('There is not auth Provider');
    return context;
}

export function AuthProvider ({children}) {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);


    const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password);

    const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

    const logout = () => signOut(auth);

    const loginWithGoogle = ()=>{
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(() => {
        const unsubscribe= onAuthStateChanged(auth, currenUser => {
            setUser(currenUser);
            setLoading(false);
        });
        return () => unsubscribe();
    },[]);


    return(
        <authContext.Provider value={{signup, login, user, logout, loading, loginWithGoogle}}>
            {children}
        </authContext.Provider>
    );
}