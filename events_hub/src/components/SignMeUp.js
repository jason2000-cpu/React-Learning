'use client'

import React, { useState } from "react";

const SignMeUp = ({ signupCallback }) =>{
    const [email, setEmail] = useState("");

    return (
        <div className="container">
            <div>
                <div className="content">
                    <input 
                        placeholder="Enter Email" 
                        type="email" name="email" 
                        value={email} 
                        onChange={(e)=> setEmail(e.target.value)}
                        />
                </div>
                &nbsp;
                <button
                    disabled={!email.includes("@")}
                    onClick={()=>{
                        signupCallback(email);
                        setEmail("");
                        alert("Signup confirmed!")
                    }}
                    className="btn"
                    type="submit"
                    >
                    Get Updates
                    </button>
            </div>
        </div>
    )
}


export default SignMeUp;
