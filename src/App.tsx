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
    Link, useNavigate, useLocation,
} from "react-router-dom";
import {useRef} from "react";
import MbtiChat from "./pages/Games/MbtiChat/MbtiChat";
import Gallery from "./components/Gallery";

export default function App(){
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const wrapRef: null | any = useRef();

    const movePage = (url: string) =>{
        if(pathname !== `/${url}` ){
            wrapRef.current.classList.replace('loaded', 'unloaded');
            setTimeout(()=> {
                navigate(url);
                wrapRef.current.classList.replace('unloaded', 'loaded');
            } , 390)
        }
    }

    return (
        <div>
                <HeaderMain />
            <div ref={wrapRef} className="wrap loaded">
                <Routes>
                    <Route path="/" element={<Home/> } />
                    <Route path="/playUs" element={<PlayUs/> } />
                    <Route path="/login" element={<Login /> } />
                    <Route path="/register" element={<SignUp /> } />
                    <Route path="/mbti" element={<MbtiChat /> } />
                    <Route path="/gallery" element={<Gallery /> } />
                </Routes>
                <MainLayout/>
            </div>
        </div>
    )
}
