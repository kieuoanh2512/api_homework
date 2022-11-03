import './register.css';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import React, { useState, useEffect } from 'react';
function register() {
    return (
        <div className="App">
            <div className="body">
                <div className="contmain">
                    <h2>Register an account</h2>
                    <form action="">
                        <div className="contuser">
                            <input type="text" name required />
                            <label>User name</label>
                        </div>
                        <div className="contuser">
                            <input type="password" name required />
                            <label>Password</label>
                        </div>
                        <div className="contuser">
                            <input type="password" name required />
                            <label>Confirm password</label>
                        </div>
                        <div className='sel'>
                            <FormControlLabel
                                style={{ color: "white" }} control={<Checkbox style={{ color: "white" }} />} label="Remember me "
                            />
                            <p href='#'> Forgot password ?   </p>
                        </div>
                        <div className='buton'>
                            <a href='/'>
                                <span />
                                <span />
                                <span />
                                <span />
                                Sign Up
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default register;
