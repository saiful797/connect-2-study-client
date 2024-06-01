import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext(null);

const AuthProvider = ( { children } ) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const updateUserProfile = ( name, image ) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image,
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log(currentUser)
            // if(currentUser){
            //     // console.log('current user: ', currentUser);
            //     //get token and store client
            //     const user = { email: currentUser.email }
            //     axiosPublic.post('/jwt', user)
            //     .then(res => {
            //         if(res.data.token){
            //             localStorage.setItem('access-token', res.data.token);
            //             setLoading(false);
            //         }
            //     })
            // }
            // else{
            //     //TODO: remove token (if token stored in the client side: local storage, catching, in memory)
            //     localStorage.removeItem('access-token');
            //     setLoading(false);
            // }
        })

        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        createUser,
        updateUserProfile,
        user,
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