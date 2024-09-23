import { useState } from "react";

const Register = () =>
    {
        const [email, setEmail] = useState('');
        const [password, setpassword]  = useState('');

        const SumbitClick = () =>
        {
            fetch('http://ar-project-server.database.windows.net',{
                method: `POST`,
                headers: {"Content-Type": "application/json"},
                body: {email,password}
            }).catch((err) => {console.log(err.message)}).then(() =>{ 
                setEmail('');
                setpassword('')
                ;})
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
                    value = {password}
                    onChange={e =>setpassword(e.target.value)}
                    required
                    />  
                </form> 

                <form> 
                    <label>Email: </label>
                    <input 
                    type="email"
                    placeholder="Enter your email"
                    value = {email}
                    onChange={e =>setEmail(e.target.value)}
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

                <button onClick={SumbitClick}>Submit</button>
                

            </div>
        );
    }
    
export default Register;