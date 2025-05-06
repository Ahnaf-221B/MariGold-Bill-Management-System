import { createUserWithEmailAndPassword, signInWithPopup, signInWithEmailAndPassword,onAuthStateChanged,  } from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { useEffect,useState } from "react";
import auth from '../firebase/firebase.config'
import React from "react";
import { GoogleAuthProvider } from "firebase/auth";

const AuthProvider = ({ children }) => {

    const provider = new GoogleAuthProvider();
	const [user,setUser] = useState(null);
	
	const createUser = (email, pass) => {
		return createUserWithEmailAndPassword(auth, email, pass);
	};

    const registerGoogle =() =>{
        signInWithPopup(auth, provider)
    }
    const signInUser =(email,pass) =>{
		return signInWithEmailAndPassword(auth , email, pass)
	}


	useEffect(()=>{
		const unSubscribe = onAuthStateChanged(auth , (currentUser) =>{
			if(currentUser)
			{
				console.log("curent user",currentUser);
				setUser(currentUser);
			}
			else{
				console.log("no user found");
			}
		})
		return ()=>{
			unSubscribe();
		}
	},[])
  
	const userInfo = {
		user,
		createUser,
        registerGoogle,
		signInUser,
		// signOut
	};
	return (
		<AuthContext value={userInfo}>{children}</AuthContext>
	);
};

export default AuthProvider;
