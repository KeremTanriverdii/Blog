import { useEffect, useState } from "react"
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Store/firebase";

const useAuth = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Local storage to insert user
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }

        // User stete watching
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                localStorage.setItem('user', JSON.stringify(currentUser));
            } else {
                setUser(null);
                localStorage.removeItem('user');
            }
        });

        return () => unsubscribe();
    }, []);

    const logout = async () => {
        try {
            await signOut(auth);
            setUser(null);
            localStorage.removeItem('user');
        } catch (err) {
            console.log('çıkış yapılırken hata oluştu', err)
        }
    };
    return { user, logout };
}
export default useAuth;