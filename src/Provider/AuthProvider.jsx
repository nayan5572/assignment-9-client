import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";



export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // new user create email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // sign in with email and password
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // handle log out
    const logOutUser = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unScriber = onAuthStateChanged(auth, currentUser => {
            console.log('User in auth state change', currentUser);
            setUser(currentUser);
        });
        return () => {
            unScriber();
        }
    }, []);



    const authInfo = {
        user,
        createUser,
        signInUser,
        logOutUser
    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;