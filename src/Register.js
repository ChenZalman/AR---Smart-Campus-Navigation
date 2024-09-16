import { useState } from "react";

const Register = () =>
    {
        const [result, setResult] = useState('Not Registered');

        const SumbitClick = () =>
        {
           setResult('Registered') ;
        }


        return (
            <div className="Register">
            <h2>Please fill in your details:</h2> 
                <form>
                    <label>Full name: </label>
                    <input 
                    type="text"
                    placeholder="Enter your full name"
                    required
                    />  
                </form>

                <form>
                    <label>Username: </label>
                    <input 
                    type="text"
                    placeholder="Enter your username"
                    required
                    />  
                </form>

                <form>
                    <label>Password: </label>
                    <input 
                    type="password"
                    placeholder="Enter your password"
                    required
                    />  
                </form>

                <form>
                    <label>Email: </label>
                    <input 
                    type="email"
                    placeholder="Enter your email"
                    required
                    />  
                </form>

                <form>
                    <label>Are you an admin/user? </label>
                    <select>
                    <option value="Admin"> Admin </option>
                    <option value="User"> User </option>
                    </select> 
                </form>

                <h3>{result}</h3>
                <button onClick={SumbitClick}>Submit</button>
                

            </div>
        );
    }
    
export default Register;