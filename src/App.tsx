import HeaderMain from "./components/HeaderMain";
import MainLayout from "./components/MainLayout";
import "./App.css";
import Home from "./pages/Home"
import PlayUs from "./pages/GameUs"
import Login from "./pages/User/Login"
import SignUp from "./pages/User/SignUp"
import {auth} from "./firebase"

import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";

export default function App(){
    return (
        <div>
            <HeaderMain />
            <Routes>
                <Route path="/" element={<Home/> } />
                <Route path="/playUs" element={<PlayUs/> } />
                <Route path="/login" element={<Login /> } />
                <Route path="/register" element={<SignUp /> } />
            </Routes>
            <MainLayout/>
        </div>
    )
}
