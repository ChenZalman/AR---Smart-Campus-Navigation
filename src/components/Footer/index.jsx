// import { Button, Img, Text } from "./..";
import { Text, Button, Img, Input } from "../../components";
import {React,useState} from "react";
import { useSignup } from "Hooks/useSignup";

export default function Footer({ ...props }) {
        const [email, setEmail] = useState('');
        const [password, setpassword]  = useState('');
        const [visible,setVisible] = useState(false);
        const [name,setName] = useState('');
        const [username,setUsername] = useState('');
        const [phoneNumber,setPhoneNumber] = useState('');
        const {signup,isLoarding,error} = useSignup()

        const SubmitClick = async (e) =>{
          e.preventDefault();
          await signup(email,password,name,phoneNumber);
            // const response = await fetch(`https://ar-tourapp-gac5fnceasb7ghh5.israelcentral-01.azurewebsites.net/api/users/signup`,{//'http://ar-project-server.database.windows.net',{
            //     method: `POST`,
            //     headers: {"Content-Type": "application/json"},
            //     body: JSON.stringify({"email":email, "password": password, "full_name":name, "phone_number":phoneNumber, "admin":1})
            // })

            // const json = await response.json()
            // if(!response.ok){
            //   console.log(response)
            // }
            // if(response.ok){
            //   setEmail('');
            //   setpassword('');
            //   setName('');
            //   setPhoneNumber('');
            //   console.log(json)
            // }
        }

  return (
    <footer
      {...props}
      className={`${props.className} flex flex-col mb-[46px] py-7 mx-[146px] md:mx-0 sm:py-5 bg-blue_gray-200 rounded-[40px]`}
    >
      <form className="container-xs flex flex-col items-center px-14 md:px-5" onSubmit={(e) => SubmitClick(e)}>
        <Text
          size="texts"
          as="p"
          className="text-shadow-ts text-[32px] font-normal text-teal-700 md:text-[30px] sm:text-[28px]"
        >
          PLEASE FILL IN YOUR DETAILS
        </Text>
        <div className="flex w-[48%] justify-center md:w-full">
            <Input
              type="text"
              name="name"
              placeholder={`FULL NAME`} 
              value={name} onChange={e => setName(e.target.value)}
              suffix={<Img src="images/img_person.svg" alt="envilope icon" className="h-[24px] w-[24px]"/>}
              className="flex h-[48px] w-full items-center justify-center gap-4 border-b border-solid border-blue_gray-700_56 px-2.5 text-[17px] tracking-[-0.43px] text-teal-700"
              required
            />
        </div>
        <div className="mt-1.5 flex w-[48%] justify-center md:w-full">
          <Input
              type={visible ? 'text': 'password'}
              name="pass"
              placeholder={`PASS`}
              value={password} onChange={e => setpassword(e.target.value)}
              suffix={<Img src={visible ? "images/img_eye_on.svg" : "images/img_eye_off.svg"} alt="Eye" className="h-[24px] w-[24px]"  onClick={() => {setVisible(!visible)}}/>}
              className="flex h-[48px] w-full items-center justify-center gap-4 border-b border-solid border-blue_gray-700_56 px-2.5 text-[17px] tracking-[-0.43px] text-teal-700"
              required
            />
        </div>
        <div className="mt-1.5 flex w-[48%] justify-center md:w-full">
            <Input
              type="text"
              name="email"
              placeholder={`EMAIL`} 
              value={email} onChange={e => setEmail(e.target.value)}
              suffix={<Img src="images/img_email.svg" alt="envilope icon" className="h-[24px] w-[24px]"/>}
              className="flex h-[48px] w-full items-center justify-center gap-4 border-b border-solid border-blue_gray-700_56 px-2.5 text-[17px] tracking-[-0.43px] text-teal-700"
              required
            />
        </div>
        <div className="mt-1.5 flex w-[48%] justify-center md:w-full">
            <Input
              type="number"
              name="phone"
              placeholder={`PHONE NUMBER`} 
              value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}
              suffix={<Img src="images/img_phone.svg" alt="envilope icon" className="h-[24px] w-[24px]"/>}
              className="flex h-[48px] w-full items-center justify-center gap-4 border-b border-solid border-blue_gray-700_56 px-2.5 text-[17px] tracking-[-0.43px] text-teal-700"
              required
            />
        </div>
        <Button
          leftIcon={<Img src="images/img_lock.svg" alt="Lock" className="h-[18px] w-[18px]" />}
          onClick ={(e) => SubmitClick(e)}
          className="mt-[30px] flex h-[40px] min-w-[100px] flex-row items-center justify-center gap-2 rounded-[20px] bg-teal-700 pl-1.5 pr-3.5 text-center font-roboto text-[14px] font-medium tracking-[0.10px] text-blue_gray-200 shadow-xs"
        >
          SIGN UP
        </Button>
      </form>
    </footer>
  );
}
