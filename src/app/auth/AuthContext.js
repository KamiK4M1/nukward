import { useContext, createContext, useState, useEffect } from "react";
import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, Provider)

    const logout = () => {
        signOut(auth)
    }

    useEffect(() => {
        const unsubscibe = onAuthStateChanged(auth, (user) => {
            setUser(CurrentUser);
        })
        return () => unsubscibe();
    }, [user])

    return (
        <AuthContext.Provider value={{ user, googleSingIn, logout}}></AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext);
}