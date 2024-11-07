import React from "react";
import "../styles/login.css"
import { Navbar } from "../components/Navbar/index";
import { Footer } from "../components/Footer";
import {AnimatedCircuitBackground} from "../components/AnimatedCircuitBackground/index"

export const Login = ()=>{
    return(
        <>
        <AnimatedCircuitBackground/>
            <div className="login-page">
                <Navbar/>
                
                <Footer/>
            </div>
        </>
    )
};

export default Login;