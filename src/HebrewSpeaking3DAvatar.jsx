import React, { useState, useEffect, useRef } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';

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
      position={[0.2, -1, 0]}
      scale={[1.2, 1.2, 1.2]}
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

const EnhancedHebrewSpeakingAvatar = () => {
  const [hebrewVoices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [test, setTest] = useState(0);
  const paragraph =
    'מעונות הסטודנטים ממוקמים בלב העיר חולון בקמפוס HIT מכון טכנולוגי חולון ומעניקים סביבת מגורים נעימה, נוחה וקרובה ללימודים.';

  function func1() {
    setTest(1); // trigger the effect
  }

  function func2() {
    setTest(2); // trigger the effect
  }

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
    }
  }, [selectedVoice]); // Trigger speech when voice is selected

  // When `test` changes (from button press), you can force a voice reload
  useEffect(() => {
    if (test === 1 || test === 2) {
      // Check if voice is set, if not, set it manually or force speech
      if (selectedVoice) {
        const utterance = new SpeechSynthesisUtterance(paragraph);
        utterance.voice = selectedVoice;
        utterance.rate = 0.8;
        utterance.pitch = 1;
        window.speechSynthesis.speak(utterance);
      }
    }
  }, [test, selectedVoice]); // re-run if test state changes

  return (
    <div
      style={{
        display: 'flex-inline',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: '100vh',
        background: '#f0f0f0',
        paddingRight: '50px',
        width: '400px',
        marginRight: '0',
        marginLeft: 'auto'
      }}
    >
      <div style={{ width: '400px', height: '900px' }}>
        <Canvas camera={{ fov: 50, near: 0.1, far: 1000, position: [0, 0, 3.5] }}>
          <Lights />
          <Model />
        </Canvas>
        {/* <button onClick={func1}>Press 1</button>
        <button onClick={func2}>Press 2</button> */}
      </div>
    </div>
  );
};

export default EnhancedHebrewSpeakingAvatar;