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
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);

  const paragraph ='מעונות הסטודנטים ממוקמים בלב העיר חולון בקמפוס HIT מכון טכנולוגי חולון ומעניקים סביבת מגורים נעימה, נוחה וקרובה ללימודים.';

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      const hebrewVoices = availableVoices.filter(voice => voice.lang.startsWith('he'));
      setVoices(hebrewVoices);
      if (hebrewVoices.length > 0) {
        setSelectedVoice(hebrewVoices[0]);
      }
    };
    window.speechSynthesis.onvoiceschanged = loadVoices;
    loadVoices();
    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  useEffect(() => {
    if (selectedVoice) {
      const utterance = new SpeechSynthesisUtterance(paragraph);
      utterance.voice = selectedVoice;
      utterance.rate = 0.8;
      utterance.pitch = 1;
      window.speechSynthesis.speak(utterance);
    }
  }, [selectedVoice]);

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', height: '100vh', background: '#f0f0f0', paddingRight:'50px' }}>
      <div style={{ width: '400px', height: '900px' }}>
        <Canvas camera={{ fov: 50, near: 0.1, far: 1000, position: [0, 0, 3.5] }}>
          <Lights />
          <Model />
        </Canvas>
      </div>
    </div>
  );
};

export default EnhancedHebrewSpeakingAvatar;