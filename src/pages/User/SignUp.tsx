import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import "./styles/Login.css";

const SignUp = () => {
    const [REGISTER_EMAIL, SET_REGISTER_EMAIL] = useState("");
    const [REGISTER_PASSWORD, SET_REGISTER_PASSWORD] = useState("");
    const [CONFIRM_PASSWORD, SET_CONFIRM_PASSWORD] = useState("");
    const register = async () => {
        try {
            const USER = await createUserWithEmailAndPassword(
                auth,
                REGISTER_EMAIL,
                REGISTER_PASSWORD
            );
            console.log(USER);
        } catch (error: any) {
            console.log(error.message);
        }
    };

    return (
        <div className="login_form" id="LOGIN-FORM">
            <h3>회원가입</h3>
            <input
                type="email"
                placeholder="Email"
                onChange={(e) => {
                    SET_REGISTER_EMAIL(e.target.value);
                }}
            />
            <br/><br/>
            <input
                type="password"
                placeholder="EmailPassword"
                onChange={(e) => {
                    SET_REGISTER_PASSWORD(e.target.value);
                }}
            />
            <br/>
            <br/>
            <button onClick={register}>CreateUser</button>
        </div>
    );
};
export default SignUp;
