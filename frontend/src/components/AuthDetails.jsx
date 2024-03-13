import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
const AuthDetails = () => {
    const [AuthUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null);
            }
        })
    }, [])

    return (
        <>
            { AuthUser ? <h1>{`signed in as ${AuthUser.email}`}</h1> : <h1>{`signout as ${AuthUser}`}</h1>}
        </>
    )
}

export default AuthDetails;