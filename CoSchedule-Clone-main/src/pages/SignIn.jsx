import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./styles/SignIn.module.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginStatus, setUser } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
    const Navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        document.title = "CoSchedule Accounts";
    }, []);

    const inputMailRef = useRef();
    const inputPassRef = useRef();

    const [mail, setMail] = useState("");
    const [pass, setPass] = useState("");

    const handleMailChange = (e) => {
        setMail(e.target.value);
    };
    const handlePassChange = (e) => {
        setPass(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const postLogin = async () => {
            const res = await axios.post("http://localhost:8080/login", {
                mail,
                pass,
            });
            if (res.data.message === "User Found") {
                alert("Login Successful");
                dispatch(loginStatus());
                dispatch(setUser(res.data.match[0]));
                inputMailRef.current.value = "";
                inputPassRef.current.value = "";
                Navigate("/MainCalender");
            } else {
                alert("Wrong Credentials, Please re-check!");
            }
        };
        postLogin();
    };

    return (
        <div className={styles.SignIn_Parent}>
            <div className={styles.SignIn_Container}>
                <div className={styles.LogoWrapper}>
                    <img
                        src="https://accounts.coschedule.com/img/cos-logo-horz.svg"
                        alt=""
                    />
                </div>
                <form className={styles.SignIn_Form} onSubmit={handleSubmit}>
                    <div>
                        <label>EMAIL ADDRESS</label>
                        <input
                            type="text"
                            placeholder="Email Address"
                            required
                            onChange={handleMailChange}
                            value={mail}
                            ref={inputMailRef}
                        />
                    </div>
                    <div>
                        <label>PASSWORD</label>
                        <input
                            type="password"
                            placeholder="Password"
                            required
                            onChange={handlePassChange}
                            value={pass}
                            ref={inputPassRef}
                        />
                    </div>
                    <div className={styles.SignIn_btn_Wrapper}>
                        <button type="submit" className={styles.SignIn_Btn}>
                            Sign In
                        </button>
                    </div>
                </form>
                <div className={styles.SignIn_bottom}>
                    <span>Need an account?</span>
                    {" | "}
                    <span>Forgot your Password?</span>
                </div>
            </div>
            <img
                className={styles.LeftBox}
                src="https://accounts.coschedule.com/img/login-boxes.svg"
                alt=""
            />
            <img
                className={styles.RightBox}
                src="https://accounts.coschedule.com/img/login-boxes.svg"
                alt=""
            />
        </div>
    );
}
