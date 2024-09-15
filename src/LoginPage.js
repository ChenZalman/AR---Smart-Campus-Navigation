//import './App.css'
import './Login.css'
import { useState } from 'react';

export default function LoginPage(){
    const [email, setEmail] = useState('exapmle@Domain');
    const [password, setpassword] = useState('');
    const [passworddisplay, setpassworddisplay] = useState('********');
    return (
        <div className='Login'>
            <ul>
            <li><a href="/HomePage">Home</a></li>
            <li><a href="contact.asp">Contact</a></li>
            <li><a href="about.asp">About</a></li>
            </ul>
            <p className='Title'>AR - SMART CAMPUS NAVIGATION</p>
            <div className='LoginBox'>
                <p>Enter your cedentials:</p>
                <div className= 'padding'></div>
                    <div>
                        Email: <input placeholder='exapmle@Domain' onChange={e => setEmail(e.target.value)} required/>
                    </div>
                    <div>
                        Password: <input placeholder='password' onChange={e => setpassworddisplay(e.target.value)} required/>
                    </div>
                    <spacer className='padding'></spacer>
                <a className='forgotpassword' href='./ForgotPasswordPage.js'>forgot password?</a>
                <div className= 'padding'></div>
                <div className='LoginButton'>
                    <button>Login</button>
                </div>
                <div className= 'padding'></div>
                <div>
                    <a href='./RegisterPage.js'>Don't have an account? Register</a>
                </div>
                <a href='./TeramofServicePage.js'>Terms of service</a>
            </div>
        </div>
    )
}