import { initializeApp } from "firebase/app";
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth"
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
    apiKey: "AIzaSyC7e-7fhN-5-PCzCZvYbVshv7OZXXBw02U",
    authDomain: "netflix-clone-59232.firebaseapp.com",
    projectId: "netflix-clone-59232",
    storageBucket: "netflix-clone-59232.firebasestorage.app",
    messagingSenderId: "480697564956",
    appId: "1:480697564956:web:630403ab773b76e9acc4d9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        })
    } catch (error) {
        console.error(error)
        toast.error(error.code.split('/')[1].split('-').join(' '))
    }
}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.error(error)
        toast.error(error.code.split('/')[1].split('-').join(' '))
    }
}

const logout = () => {
    signOut(auth)
}

export { auth, db, login, signup, logout }