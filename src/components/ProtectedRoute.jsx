import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { Nav } from "../styles/NavBar";

export function ProtectedRoute({ exact, path, component }) {
const [auth, setAuth] = useState(false);
const [loading, setLoading] = useState(true);
const [isModerator, setIsModerator] = useState(false);

useEffect(() => {
async function checkAuthStatus() {
    try {
    const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/status`,
        {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        }
    );
    if (response.status >= 400) {
        throw new Error("not authorized");
    } else {
        const { moderator } = await response.json();
        if (moderator) {
        setIsModerator(true);
        }
        setAuth(true);
        setLoading(false);
    }
    } catch (err) {
    console.log(err.message);
    setLoading(false);
    }
}
checkAuthStatus();
}, []);
console.log(isModerator);
if (!loading && !auth) {
return <Redirect to="/sign-in" />;
} else {
return (
    !loading && (
    <>
        <Nav isModerator={isModerator} auth={true} />
        <Route exact={exact} path={path} component={component} />
    </>
    )
);
}
}
