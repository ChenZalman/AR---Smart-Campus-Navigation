 import './index.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { BsDisplay } from 'react-icons/bs';

 export default function LoginPage(){
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [error,setError] = useState(null);
    const [visible,setVisible] = useState(false)
    // const [passworddisplay, setpassworddisplay] = useState('');
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);
        fetch('http://artour-app.azurewebsites.net',{ //'http://ar-project-server.database.windows.net'   'http://ar-server.database.windows.net/'
            method: `POST`,
            headers: {"Content-Type": "application/json"},
            body: {email,password}
        }
        ).catch((err) => {console.log(err.message)}).then((message) =>{ 
        console.log(message);
        setEmail('');
        setpassword('');})
    }

    return (
        <div className='Login'>
            <h1 className='Title'>AR - SMART CAMPUS NAVIGATION</h1>
            <form className='LoginBox' onSubmit={handleSubmit}>
                <p>Enter your cedentials:</p>
                {/* <div className= 'padding'></div> */}
                    <div className='row'>
                        <label>Email:</label> <input className='TextField' placeholder='exapmle@domain' value={email} onChange={e => setEmail(e.target.value)} required/>
                    </div>
                    <div className='row'>
                        <label>Password:</label> <input className='TextField' placeholder='password' value={password} onChange={e => setpassword(e.target.value)} required type={visible ? 'text': 'password'}/>
                        <div className='eye' onClick={() => {setVisible(!visible)}}>   
                            {visible ? <FaRegEye /> : <FaRegEyeSlash/>}
                        </div>
                    </div>
  
                    
                    {/* <spacer className='padding'></spacer> */}
                <Link to='./ForgotPasswordPage.js' className='forgotpassword'>forgot password?</Link>
                <div className= 'padding'></div>
                <div className='LoginButton'>
                    <button>Login</button>
                </div>
                <div className= 'padding'></div>
                <div>
                    <Link to='./register.js'>Don't have an account? Register</Link>
                </div>
                <Link to='./termsofServicePage.js'>Terms of service</Link>
            </form>
        </div>
    )
}

{/* ------This is the old version of the page appearence-------
    <div className='Login'>
            <ul>
            <li><a href="/HomePage">Home</a></li>
            <li><a href="contact.asp">Contact</a></li>
            <li><a href="about.asp">About</a></li>
            </ul>
            <p className='Title'>AR - SMART CAMPUS NAVIGATION</p>
            <form className='LoginBox'>
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
            </form>
        </div>
         */}