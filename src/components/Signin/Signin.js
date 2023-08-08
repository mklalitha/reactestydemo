import { useState } from "react";
import React from "react";
import "./Signin.css";

import Validation from "./Validation";


function Signin(){
    const [values, setValues] = useState({
        email: '',
        password: '',
        confirm_password: ''
    })
    const [errors, setErrors] = useState({})

    const handleInput = (e) => {
        setValues(prev => ({...prev, [e.target.name]: [e.target.value]}))
    }

    function handleValidation(e) {
        e.preventDefault()
        setErrors(Validation(values))
    }
    return(
    
        <div className="wrapper">
           <div className="signcontainer">
            <form className="login"onSubmit={handleValidation}>
            <div className="loginText">
            <h2 className="heading1">Sign in</h2>
            <button className="heading2">Register</button>
            </div>
            <label for="email"><strong>Email address</strong></label>
            <input type="email"  value={values.email}
                name="email" onChange={handleInput} className='form-control' />
            {errors.email && <p style={{color: "red"}}>{errors.email}</p>}

            <label for="password" className='mt-2'><strong>Password</strong></label>
            <input type="password"  value={values.password}
            name="password" onChange={handleInput} className='form-control'/>
            {errors.password && <p style={{color: "red"}}>{errors.password}</p>}

            <div  className="heading-bottom">
            <input type="checkbox" className="checkbox"/><span className="heading-bottom1">Stay signed in</span>
            <span  className="heading-bottom2">forgot Your password</span>
            </div>
           
           <button className="signinbtn">Sign in</button>
           <span className="signinbottext1">Trouble signing in?</span>
           <span className="signinbottext2">OR</span>
           <button className="btn"> <img src="./logo/google.png" alt="googlelogo" style={{ height: "20px", width: "20px" }}/>Continue with Google</button>
           <button className="btn"><img src="./logo/facebook.png" alt="facebooklogo" style={{ height: "20px", width: "20px"}}/>Continue with Facebook</button>
           <button className="btn"><img src="./logo/apple logo.png" alt="applelogo" style={{ height: "20px", width: "20px" }}/>Continue with Apple</button>
           <p>By clicking Sign in or Continue with Google, Facebook, or Apple, you agree to Etsy's Terms of Use and Privacy Policy. Etsy may send you communications; you may change your preferences in your account settings. We'll never post without your permission.</p>
            </form>
            
        </div>
        </div>
        
    )

}


export default Signin;