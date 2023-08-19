import React, {useState} from "react";
import ReactDOM from "react-dom";
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    let navigate = useNavigate();
       

    async function onContinue(e){
        e.preventDefault();


        if(username === "" || password === ""){

            alert("All fields are necessary to fill");           

        }else{
            await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username : `${username}`,
                    password : `${password}`
                })
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                localStorage.setItem("userObject", JSON.stringify(data))
                navigate('/Profile')

            })
            .catch(err => alert(`${err}`))
        }


    }


    return(
        <div className="login-page">
            <div className="login-card">
                <form  onSubmit={onContinue} className="form">
                    <div className="wave-cont"> 
                        <p className="welcome">Welcome back!</p>
                        <span><img src = "https://media.tenor.com/yWSRmymbuBkAAAAM/waving-hi.gif" className="wave"/></span>
                    </div>
                    
                    <h1 className="sign-in">Sign in to your account</h1>

                    <label htmlFor="username">Username </label>
                    <input type = "text" placeholder="username" onChange={(e) => setUsername(e.target.value)} name = "username" className="input"/>

                    <label htmlFor="password">Password</label>
                    <input type = "password" placeholder="password" onChange={(e) => setPassword(e.target.value)} name = "password" className="input"/>

                    <button className="button">CONTINUE</button>
                    <p className="forgot">Forgot your password?</p>
                </form>
            </div>
            <p className="dont">Don't have an account? <span className="sign-up">Sign up</span></p>
        </div>
    )
}

export default Login;