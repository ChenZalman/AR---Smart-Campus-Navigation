import { Helmet } from "react-helmet";
import Pop from "./Pop";
import React from "react";
import HebrewSpeaking3DAvatar from '../../HebrewSpeaking3DAvatar';
import './index.css';
import {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import QrScanner from "react-qr-scanner"

import { useBuildingContext } from 'Hooks/useBuildingContext';

export default function PopPage() {

  const {dispatch} = useBuildingContext()

  const [display, setDisplay] = useState(false);

  function displayMap(){
    setDisplay(true);
  }

  const [data, setData] = useState(null)

  const [isScanning, setIsScanning] = useState(false)
  const navigate = useNavigate();

  const handleScan = (result) => {
      if (result) {
      setData(result.text)
      setIsScanning(false)
      console.log(result.text)
      navigate('/' + result.text);
      }
  }

  const handleError = (error) => {
      console.error(error)
  }


  //Here it was a test for restetting the avatar text
  useEffect(() => {
    dispatch({type: 0, payload:{discription: "ברוכים הבאים למכון הטכנולוגי חולון. לחצו על הכפתור שמעליי בכדי להציג את המפה ולהתחיל את הסיור הוירטואלי, או שניתן גם לבצע סריקה באמצעות הכפתור העליון ולעבור מהר לדף הבניין המבוקש."}})
}, [])

  return (
    <>
      <Helmet>
        <title>Map</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      {/* <div className="flex w-full flex-col gap-20 bg-white-a700 md:gap-[60px] sm:gap-10"> */}

      <button onClick={() => {setIsScanning(!isScanning)}}>Press Here to scan the QR code on the building</button>
      <div style={{ width: "250px", height: "250px", position: "relative", overflow: "hidden" }}>
        {isScanning &&
          <QrScanner
              onScan={handleScan}
              onError={handleError}
              style={{ width: "100%", height: "100%" }}
              constraints={{
                  audio: false,
                  video: { facingMode: "environment" },
              }}
          />}
      </div>

      {!display && <button className = "showMapButton" onClick={displayMap}>Press to start</button>}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        {display && <Pop/>}
        <HebrewSpeaking3DAvatar/>
      </div>
      {/* </div> */}
    </>
  );
}
