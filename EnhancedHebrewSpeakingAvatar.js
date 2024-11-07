import React, { useState, useEffect } from 'react';

const EnhancedHebrewSpeakingAvatar = () => {
  const [text, setText] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices.filter(voice => voice.lang.startsWith('he')));
    };

    window.speechSynthesis.onvoiceschanged = loadVoices;
    loadVoices();

    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  useEffect(() => {
    if (voices.length > 0 && !selectedVoice) {
      setSelectedVoice(voices[0]);
    }
  }, [voices, selectedVoice]);

  useEffect(() => {
    let utterance;
    const speak = () => {
      if ('speechSynthesis' in window && text && selectedVoice) {
        window.speechSynthesis.cancel();
        utterance = new SpeechSynthesisUtterance(text);
        utterance.voice = selectedVoice;
        utterance.rate = 0.8; // Slightly slower rate for better pronunciation
        utterance.pitch = 1;
        utterance.onstart = () => setIsSpeaking(true);
        utterance.onend = () => setIsSpeaking(false);
        window.speechSynthesis.speak(utterance);
      }
    };
    const timeoutId = setTimeout(speak, 1000);

    return () => {
      clearTimeout(timeoutId);
      if (utterance) {
        window.speechSynthesis.cancel();
      }
    };
  }, [text, selectedVoice]);

  const handleVoiceChange = (event) => {
    const voice = voices.find(v => v.name === event.target.value);
    setSelectedVoice(voice);
  };

  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', maxWidth: '300px', margin: '20px auto' }}>
      <h2 style={{ textAlign: 'center' }}>דובר עברית משופר</h2>
      <div style={{ textAlign: 'center', marginBottom: '16px' }}>
        <svg width="200" height="200" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="90" fill="#FFD700" />
          <circle cx="70" cy="80" r="10" fill="black" />
          <circle cx="130" cy="80" r="10" fill="black" />
          <path d={isSpeaking ? "M 50 140 Q 100 180 150 140" : "M 50 140 Q 100 160 150 140"} 
                fill="none" stroke="black" strokeWidth="5" />
        </svg>
      </div>
      <select 
        onChange={handleVoiceChange} 
        value={selectedVoice ? selectedVoice.name : ''}
        style={{ width: '100%', marginBottom: '10px', padding: '5px' }}
      >
        {voices.map(voice => (
          <option key={voice.name} value={voice.name}>
            {voice.name}
          </option>
        ))}
      </select>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="הכנס טקסט לדיבור (כולל סימני פיסוק)"
        style={{ width: '100%', padding: '8px', boxSizing: 'border-box', textAlign: 'right', minHeight: '100px' }}
        dir="rtl"
      />
    </div>
  );
};

export default EnhancedHebrewSpeakingAvatar;