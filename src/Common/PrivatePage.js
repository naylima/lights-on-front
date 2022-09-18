import * as React from "react";
import { Navigate } from "react-router-dom";

function renderError() {
    localStorage.clear("lightson");
    return <Navigate to="/" />;
}

export default function PrivatePage({ children }) {

    const auth = JSON.parse(localStorage.getItem("lightson"));

    if (!auth) {
        return renderError();
    }

    return (
        <>
            {children}
        </>
    );
    
}