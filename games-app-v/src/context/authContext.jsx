import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../firebase";
import { isLogged } from "../store/auth/authSlice";


export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    if(!context) throw new Error('There is not auth Provider');
    return context;
}

export function AuthProvider ({children}) {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    


    const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password);

    const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

    const logout = () => signOut(auth);

    const loginWithGoogle = ()=>{
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    }

    //verifica si el usuario esta logeado o no y devuelve la referencia
    useEffect(() => {
        
        const unsubscribe= onAuthStateChanged(auth, currenUser => {
            setUser(currenUser);
            setLoading(false);
            console.log(currenUser.email, currenUser.displayName);
            const authState = useSelector(state => state.auth);
            console.log(authState.length);
            if(authState.length = 0){
                dispatch(isLogged(currenUser.email));
                console.log("eaaaaaaaaaaaa");
            }
            
        });
        return () => unsubscribe();
    },[]);


    return(
        <authContext.Provider value={{signup, login, user, logout, loading, loginWithGoogle}}>
            {children}
        </authContext.Provider>
    );
}