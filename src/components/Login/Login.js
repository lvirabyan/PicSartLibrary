import React, { useState } from "react";
import HeaderLogin from "../Header/HeaderLogin/HeaderLogin";
import FooterLogin from "../Footer/FooterLogin/FooterLogin";
import "./Login.css";

const LoginRegister = () => {
    const [action, setAction] = useState("Sign Up");
 return(
    <>
    <HeaderLogin/>
    <div className = "conteiner">
        <div className = "header">
            <div className="text">{action} </div>
            <div className="underline"> </div>
        </div>
            <div className="inputs">
                {action === "Login" ? <div></div> : 
                <div className="input">
                    <input type = "text" placeholder="Name"/>
                </div>}
                <div className="input">
                    <input type = "email" placeholder="Email"/>
                </div>
                <div className="input">
                    <input type = "password" placeholder="Password"/>
                </div>
            </div>
            {action === "Sign Up" ? <div></div> : <div className="forgot-password">Forgot Password? <span>Click Here!</span></div>}

            <div className="submit-container">
                <div className={action === "Login"? "submit gray" : "submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action === "Sign Up"? "submit gray" : "submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>
    </div>
    <FooterLogin/>
    </>
 )
}
export default LoginRegister;