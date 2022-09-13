import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "../Common/Contexts/UserContext.js";
import GlobalStyle from "../Styles/GlobalStyle.js";
import SignIn from "./Sign-In/SignIn.js";
import SignUp from "./Sign-Up/SignUp.js";

export default function App() {

    const [user, setUser] = useState({}) 

    return(
<>
    <GlobalStyle />
        <UserContext.Provider value={{user, setUser}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignIn />} ></Route>
                    <Route path="/sign-up" element={<SignUp />} ></Route>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
</>
    )
}