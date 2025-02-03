import { Text, Button, Img, Input } from "../../components";
import { React, useState } from "react";
import { useSignup } from "Hooks/useSignup";

export default function SignUpPageView({ ...props }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const { signup, isLoading, error } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email, password, name, phoneNumber);
  };

  return (
    <div className="mx-[146px] mb-8 md:mx-0"> 
      <div className="flex bottom-0 left-0 right-0 top-0 m-auto w-[90%] rounded-[40px] bg-teal-100 border-2 border-teal-300 py-[30px] sm:py-5 shadow-lg">
        <div className="container flex flex-col items-center w-[50%] px-14 md:px-5 mx-auto">
          <form className="w-full flex flex-col items-center" onSubmit={handleSubmit}>
            <Text
              size="texts"
              as="p"
              className="text-shadow-ts text-[32px] font-normal text-teal-700 md:text-[30px] sm:text-[28px]"
            >
              PLEASE FILL IN YOUR DETAILS
            </Text>
            <div className="flex w-full justify-center mt-4">
              <Input
                type="text"
                name="name"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                suffix={<Img src="images/img_person.svg" alt="Person Icon" className="h-[24px] w-[24px]" />}
                className="flex h-[48px] w-full items-center justify-center gap-4 border-b border-solid border-teal-300 px-2.5 text-[17px] tracking-[-0.43px]"
                required
              />
            </div>
            <div className="mt-4 flex w-full justify-center">
              <Input
                type={visible ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                suffix={
                  <Img
                    src={visible ? "images/img_eye_on.svg" : "images/img_eye_off.svg"}
                    alt="Eye Icon"
                    className="h-[24px] w-[24px]"
                    onClick={() => setVisible(!visible)}
                  />
                }
                className="flex h-[48px] w-full items-center justify-center gap-4 border-b border-solid border-teal-300 px-2.5 text-[17px] tracking-[-0.43px]"
                required
              />
            </div>
            <div className="mt-4 flex w-full justify-center">
              <Input
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                suffix={<Img src="images/img_email.svg" alt="Email Icon" className="h-[24px] w-[24px]" />}
                className="flex h-[48px] w-full items-center justify-center gap-4 border-b border-solid border-teal-300 px-2.5 text-[17px] tracking-[-0.43px]"
                required
              />
            </div>
            <div className="mt-4 flex w-full justify-center">
              <Input
                type="number"
                name="phone"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                suffix={<Img src="images/img_phone.svg" alt="Phone Icon" className="h-[24px] w-[24px]" />}
                className="flex h-[48px] w-full items-center justify-center gap-4 border-b border-solid border-teal-300 px-2.5 text-[17px] tracking-[-0.43px]"
                required
              />
            </div>
            <Button
              leftIcon={<Img src="images/img_lock.svg" alt="Lock Icon" className="h-[18px] w-[18px]" />}
              className="mt-[30px] flex h-[40px] min-w-[100px] flex-row items-center justify-center gap-2 rounded-[20px] bg-teal-700 px-3 text-center font-roboto text-[14px] font-medium tracking-[0.10px] pr-5 text-teal-100 shadow-xs mx-auto"
              onClick={handleSubmit}
            >
              Sign Up
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
