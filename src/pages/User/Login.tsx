import { auth } from "../../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState, useEffect } from "react";
import "./styles/Login.css";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function Login() {
    const [USER_DATA, SET_USER_DATA] : any= useState();
    const [disabled, setDisable] = useState(false);
    const navigate = useNavigate();
    
    const get_login = async () => {
        axios.get("https://localhost:3000/users")
        .then()
        .catch()
        // .then(response => console.log(response))
    }
// useEffect(() => {
    //     if(userData){
    //         setDisable(true);
    //     }
    // })
    const [LOGIN_CONFIRM, SET_LOGIN_CONFIRM] = useState("GG")
    function handleGoogleLogin() {
        console.log(GoogleAuthProvider);
        const provider = new GoogleAuthProvider(); // provider 구글 설정
        signInWithPopup(auth, provider) // 팝업창 띄워서 로그인
            .then((data) => {
                SET_USER_DATA(data.user); // user data 설정
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });
    }
    
    const register_move = () => {
        navigate("/register")
    }
    return (
        <div className="login_form" id="LOGIN-FORM">
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <input type="email" placeholder="이메일을 입력해주세요."/> <br /><br />
            <input type="password" placeholder="비밀번호를 입력해주세요."/>
            <br /><br />
            {LOGIN_CONFIRM}
            <br/> <br />
            <button disabled={disabled} onClick={handleGoogleLogin}>로그인</button>
            <button onClick={get_login}> 카카오 로그인 </button> <br />
            <button onClick={register_move}> 아직 회원이 아니신가요? </button>
            
            {/*<h4>로그인하면 아래쪽에 이름이 나타납니다.</h4>*/}
            {/*<div>*/}
            {/*    {USER_DATA*/}
            {/*        ? "환영합니다 : " + USER_DATA.displayName + "님"*/}
            {/*        : ""}*/}
            {/*</div>*/}
        </div>
    );
}

export default Login;
