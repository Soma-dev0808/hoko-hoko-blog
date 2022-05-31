/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/function-component-definition */
import React from 'react';

import './Register.css';

const RegisterForm = () => {
    return (
        <section className="register">
            <h2 className="title"> Register</h2>
            <div className="explanation"> Create your account. Its free and only takes a minute</div>
            <input className="firstname inputs name" placeholder="First Name" />
            <input className="lastname inputs name" placeholder="Last Name" />
            <input className="email input2" placeholder="Email" type="email" />
            <input className="password input2" placeholder="Password" />
            <input className="confirmpassword input2" placeholder="Confirm Password" />
            <input type="checkbox" value="agreed" />
            <span>I accept the </span>
            <a href="https://www.lovebakesgoodcakes.com/canadian-meat-pie/" target="_blank" rel="noreferrer">Terms of Use</a>
            <span> & </span>
            <a href="https://upload.wikimedia.org/wikipedia/commons/8/82/Oia%2C_Santorini_HDR_sunset.jpg" target="_blank" rel="noreferrer">Privacy Policy</a>
            <input className="submit" type="submit" value="Register Now" />

        </section>
    );
};

export default RegisterForm;
