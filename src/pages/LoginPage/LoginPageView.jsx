import { Text, Button, Img, Input } from "../../components";
import {React,useState} from "react";
import { Link } from "react-router-dom";
import { useLogin } from "Hooks/useLogin";

export default function LoginPageView() {
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  //const [error,setError] = useState(null);
  const [visible,setVisible] = useState(false)
  const {login,isLoading,error} = useLogin()

  const handleSubmit = async (e) =>{
    e.preventDefault();
    await login(email,password)
    // console.log(email);
    //  const response = await fetch('http://artour-app.azurewebsites.net/login',{ 
    //     method: `POST`,
    //     headers: {"Content-Type": "application/json"},
    //     body: JSON.stringify({"email" : email,"password" : password})
    // }
    // ).catch((err) => {console.log(err.message)}).then((message) =>{ 
    // console.log(message);
    // setEmail('');
    // setpassword('');})
}

const navigate = () => {
  
}

  return (
    <div className="mb-8 flex justify-center px-14 md:px-5">
      <div className="flex w-[80%] flex-col items-center justify-center rounded-[40px] bg-teal-100 border-2 border-teal-300 py-[42px] shadow-xs md:w-full md:py-5">
        <form className="container-xs flex flex-col items-center gap-[18px] px-14 md:px-5" onSubmit={handleSubmit}>
          <Text
            size="texts"
            as="p"
            className="text-shadow-ts text-[32px] font-normal md:text-[30px] text-teal-700 sm:text-[28px]"
          >
            ENTER YOUR CREDENTIALS
          </Text>
          <div className="flex w-[48%] justify-center md:w-full">
            <Input
              type="text"
              name="email"
              placeholder={`Email`}
              value={email} onChange={e => setEmail(e.target.value)}
              suffix={<Img src="images/img_email.svg" alt="envilope icon" className="h-[24px] w-[24px]"/>}
              className="flex h-[48px] w-full items-center justify-center gap-4 border-b border-solid border-teal-300 px-2.5 text-[17px] tracking-[-0.43px]"
              required
            />
          </div>
          <div className="flex w-[48%] justify-center md:w-full">
            <Input
              type={visible ? 'text': 'password'}
              name="pass"
              placeholder={`Password`}
              value={password} onChange={e => setpassword(e.target.value)}
              suffix={<Img src={visible ? "images/img_eye_on.svg" : "images/img_eye_off.svg"} alt="Eye" className="h-[24px] w-[24px]"  onClick={() => {setVisible(!visible)}}/>}
              className="flex h-[48px] w-full items-center justify-center gap-4 border-b border-solid border-teal-300 px-2.5 text-[17px] tracking-[-0.43px]"
              required
            />
          </div>
          
          <Link to="/forgotpassword" className="text-[17px] font-normal tracking-[-0.43px] text-teal-700">
            Forgot your password? Click here
          </Link>
          
          <Button
            leftIcon={<Img src="images/img_lock.svg" alt="Lock" className="h-[18px] w-[18px]" />}
            className="flex h-[40px] min-w-[100px] flex-row items-center justify-center gap-2 rounded-[20px] bg-teal-700 pl-3 pr-5 text-center font-roboto text-[14px] font-medium tracking-[0.10px] text-teal-100 shadow-xs"
          >
            Login
          </Button>
          <div className="flex flex-col items-center">
          
            <Link to="/registrationpage" className="flex text-[17px] font-normal tracking-[-0.43px] text-teal-700">
              Don’t have an Account? SIGN UP NOW!
            </Link>
            
            {/* This Tag caused a warning to appear and it does nothing so it is commented until further notice */}
            {/* <a href="#"> */} 
            
              <Link to="/termsofServies" className="flex text-[17px] font-normal tracking-[-0.43px] text-teal-700">
                Terms of Service
              </Link>
              
            {/* </a> */}
          </div>
        </form>
      </div>
    </div>
  );
}
