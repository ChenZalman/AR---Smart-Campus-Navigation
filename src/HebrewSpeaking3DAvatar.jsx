import React, { useState, useEffect, useRef } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';
import { useBuildingContext } from 'Hooks/useBuildingContext';

const Model = () => {
  const group = useRef();
  const { scene, animations } = useGLTF('Dave.glb');
  const { actions } = useAnimations(animations, group);
  const { camera } = useThree();

  useEffect(() => {
    Object.values(actions).forEach(action => action.play());
  }, [actions]);

  useFrame(() => {
    camera.position.set(0, 0, 3.5);
    camera.lookAt(0, 0, 0);
  });

  return (
    <group
      ref={group}
      rotation={[0, THREE.MathUtils.degToRad(25), 0]}
      position={[-0.15, -0.5, 0.5]}
      scale={[1, 1, 1]}
    >
      <primitive object={scene} />
    </group>
  );
};

const Lights = () => {
  return (
    <>
      <ambientLight intensity={1.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      <directionalLight position={[-5, 5, 5]} intensity={1} />
      <pointLight position={[0, 5, 0]} intensity={1} />
    </>
  );
};

// document.addEventListener("DOMContentLoaded", () => {
//   document.getElementById("stopButton").addEventListener("click", () => {
//       window.speechSynthesis.cancel();
//   })});

const EnhancedHebrewSpeakingAvatar = () => {
  const [hebrewVoices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [test, setTest] = useState(0);
  const {dispatch,buildingInfo} = useBuildingContext()
  const [paragraph,setParagraph] = useState(buildingInfo)

    //const paragraph = 'מעונות הסטודנטים ממוקמים בלב העיר חולון בקמפוס HIT מכון טכנולוגי חולון ומעניקים סביבת מגורים נעימה, נוחה וקרובה ללימודים.';
  useEffect(() =>{
      setParagraph(buildingInfo)
   },[buildingInfo])

  // Load voices only once, and if voices change, update them.
  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      const hebrewVoices = availableVoices.filter((voice) => voice.lang.startsWith('he'));
      setVoices(hebrewVoices);
      if (hebrewVoices.length > 0 && !selectedVoice) {
        setSelectedVoice(hebrewVoices[0]); // Set default voice if not already set
      }
    };
    window.speechSynthesis.onvoiceschanged = loadVoices;
    loadVoices(); // Initial load
    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []); // only run on mount

  // Play speech when selectedVoice changes
  useEffect(() => {
    if (selectedVoice) {
      const utterance = new SpeechSynthesisUtterance(paragraph);
      utterance.voice = selectedVoice;
      utterance.rate = 0.8;
      utterance.pitch = 1;
      window.speechSynthesis.speak(utterance);
      if(paragraph != "")
      {
        dispatch({type: 0, payload:{discription: ""}})
      }
    }
  }, [paragraph,selectedVoice]); // Trigger speech when voice is selected

  return (
    <div
      style={{
        display: 'flex-inline',
        justifyContent: 'flex-end',
        alignItems: 'center',
        // height: '100vh',
        // height: '630px',
        background: 'transparent',
        // paddingRight: '50px',
        width: '300px',
      }}
    >
      <div style={{ width: '300px', height: '600px' }}>
      <button className = "flex items-center justify-center h-10 w-[160px] border-2 border-teal-300 rounded-[34px] bg-teal-100 px-6 py-3 text-center font-roboto text-[16px] font-medium tracking-wide text-teal-700 shadow-lg hover:brightness-110 transition-all duration-300" onClick = {() => {window.speechSynthesis.cancel();}} id="stopButton">Stop Talking</button>
        <Canvas camera={{ fov: 50, near: 0.1, far: 1000, position: [0, 0, 3.5] }}>
          <Lights />
          <Model />
        </Canvas>
      </div>
    </div>
  );
};

export default EnhancedHebrewSpeakingAvatar;