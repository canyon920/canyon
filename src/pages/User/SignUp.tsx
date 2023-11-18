import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

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
        <div>
            <input
                placeholder="Email"
                onChange={(e) => {
                    SET_REGISTER_EMAIL(e.target.value);
                }}
            />
            <input
                placeholder="EmailPassword"
                onChange={(e) => {
                    SET_REGISTER_PASSWORD(e.target.value);
                }}
            />
            <button onClick={register}>CreateUser</button>
        </div>
    );
};
export default SignUp;
