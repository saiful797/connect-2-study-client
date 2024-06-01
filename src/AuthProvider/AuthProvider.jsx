import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext(null);

const AuthProvider = ( { children } ) => {
    // const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const updateUserProfile = (name, imageURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: imageURL
        })
    }

    const authInfo = {
        createUser,
        updateUserProfile,
        loading,
    }
    return (
        <AuthContext.Provider value = { authInfo }>
            { children }
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes ={
    children: PropTypes.node,
}

export default AuthProvider;