import { auth } from "../../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState, useEffect } from "react";
import "./styles/Login.css";

function Login() {
    const [USER_DATA, SET_USER_DATA] : any= useState();
    const [disabled, setDisable] = useState(false);

    // useEffect(() => {
    //     if(userData){
    //         setDisable(true);
    //     }
    // })
    function handleGoogleLogin() {
        const provider = new GoogleAuthProvider(); // provider 구글 설정
        signInWithPopup(auth, provider) // 팝업창 띄워서 로그인
            .then((data) => {
                SET_USER_DATA(data.user); // user data 설정
                console.log(data); // console에 UserCredentialImpl 출력
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div className="login_form" id="LOGIN-FORM">
            <h3>구글 로그인 테스트</h3>
                  <input type="email" placeholder="이메일을 입력해주세요."/> <br /><br />
                  <input type="password" placeholder="비밀번호를 입력해주세요."/>
            <br /><br />
            <button disabled={disabled} onClick={handleGoogleLogin}>로그인</button>
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
