import { Helmet } from "react-helmet";
import Pop from "./Pop";
import React from "react";
import HebrewSpeaking3DAvatar from '../../HebrewSpeaking3DAvatar';
import './index.css';
import {useState} from "react";

export default function PopPage() {

  const [display, setDisplay] = useState(false);

  function displayMap(){
    setDisplay(true);
  }

  return (
    <>
      <Helmet>
        <title>Pop</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      {/* <div className="flex w-full flex-col gap-20 bg-white-a700 md:gap-[60px] sm:gap-10"> */}

      {!display && <button onClick={displayMap}>Press to start</button>}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        {display && <Pop/>}
        <HebrewSpeaking3DAvatar/>
      </div>
      {/* </div> */}
    </>
  );
}
