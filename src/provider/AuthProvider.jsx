import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, signInWithPopup, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import auth from '../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";

const AuthProvider = ({ children }) => {
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [balance, setBalance] = useState(0); // Store balance here
    
    // Initialize the balance for each user based on their UID
    const initializeBalance = (userId) => {
        const storedBalance = localStorage.getItem(`balance_${userId}`);
        if (storedBalance) {
            setBalance(parseInt(storedBalance));
        } else {
            setBalance(10000); // Default balance if not set
            localStorage.setItem(`balance_${userId}`, 10000); // Set default balance for the new user
        }
    };

    // Update balance in localStorage for the specific user
    const updateBalance = (amount) => {
        if (user) {
            setBalance(prevBalance => {
                const newBalance = prevBalance - amount;
                localStorage.setItem(`balance_${user.uid}`, newBalance); // Store the updated balance in localStorage
                return newBalance;
            });
        }
    };

    const createUser = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass);
    };

    const registerGoogle = () => {
        return signInWithPopup(auth, provider);
    };

    const signInUser = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass);
    };

    const signOutUser = () => {
        return signOut(auth);
    };

    const updateUser = (updateData) => {
        return updateProfile(auth.currentUser, updateData);
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                initializeBalance(currentUser.uid); // Initialize balance for the logged-in user
            } else {
                setUser(null);
                setBalance(0); // Reset balance when no user is logged in
            }
        });
        return () => {
            unSubscribe();
        };
    }, []);

    const userInfo = {
        user,
        createUser,
        registerGoogle,
        signInUser,
        signOutUser,
        updateUser,
        balance,
        updateBalance, // Expose updateBalance method
    };

    return (
        <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
