import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Login.css';
import { auth } from '../../Firebase/firebase'
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const login = (event) => {
        event.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                // login and redirect to home page
                history.push("/")

            })
            .catch((e) => alert(e.message))

    }
    const register = (event) => {
        event.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(auth => {
                //create a user and login and redirect to home page
                history.push("/")

            })
            .catch((e) => alert(e.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/640px-Amazon_logo.svg.png" alt="logo" />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input value={email} type="email" onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input value={password} type="password" onChange={e => setPassword(e.target.value)} />
                    <button
                        type="submit" onClick={login} className="login__signInButton">Sign In</button>
                </form>
                <p>By Signing-in you agree to Amazon's Conditions of USe & Sale.Please see our Privacy Notice,our Cokkies Notice and our Interest-Based Ads Notice</p>
                <button onClick={register} className="login__registerButton">
                    Create your Amazon Account
                </button>

            </div>


        </div>
    )
}

export default Login
