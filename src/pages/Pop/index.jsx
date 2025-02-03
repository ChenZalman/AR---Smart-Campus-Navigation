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

      <button
        onClick={() => setIsScanning(!isScanning)}
        className="mx-auto w-[550px] border-2 border-teal-300 px-4 py-2 rounded-lg text-teal-700 text-xl font-semibold transition-all duration-300 bg-teal-100 hover:brightness-110 hover:shadow-lg"
      >
        Press Here to scan the QR code on the building
      </button>

      {isScanning && (
        <div style={{ width: "250px", height: "250px", position: "relative", overflow: "hidden" }}>
          <QrScanner
            onScan={handleScan}
            onError={handleError}
            style={{ width: "100%", height: "100%" }}
            constraints={{
              audio: false,
              video: { facingMode: "environment" },
            }}
          />
        </div>
      )}

      {/* Horizontal Rule with Teal Color */}
      <hr className="border-t-2 border-teal-300 my-2 w-[90%] mx-auto" />

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: '20px', marginBottom:'50px' }}>
      {!display && (
        <div className="rounded-[40px] bg-teal-100 max-w-6xl p-6 border-2 border-teal-300 shadow-md">
          <div className="flex justify-center">
            <h3 className="text-teal-800 text-2xl font-semibold pb-2 mb-4 border-b-2 border-teal-300 inline-block">
              Pop page
            </h3>
          </div>


          <p className="text-teal-700 text-xl mb-4 leading-relaxed justify-start">
            When you click on the button, a map will appear, allowing you to explore the campus.  
            <br />As you select different buildings on the map, the avatar will speak and provide  
            detailed information about each location.<br />You can also scan a QR code on a building  
            to quickly navigate to its specific page.
          </p>
          <br />
          <button 
            className="flex items-center justify-center h-14 mx-auto px-6 rounded-full bg-teal-600 text-white text-lg font-medium tracking-wide shadow-lg hover:bg-teal-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transform hover:scale-105 transition-transform duration-300"
            onClick={displayMap}
          >
            Press to start
          </button>
        </div>
      )}
        {display && <Pop />}
        <HebrewSpeaking3DAvatar style={{ top: "700px" }} />
      </div>
    </>

  );
}
