import React, { useState, useEffect } from 'react';
import './App.css';
import msdAngry from './assets/ms-dhoni-angry.gif';
import msdDance from './assets/msd-dance.gif';
import boleJoKoyal from './assets/bole-jo-koyal.mp3';
import msdAngryAudio from './assets/msd-angry.mp3';

export default function App() {

  const [inputValue, setInputValue] = useState('');
  const [isSevenChars, setIsSevenChars] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [image, setImage] = useState(null)
  const [audio, setAudio] = useState(null)

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.length == 7) {
      setIsSevenChars(true);
    }
    else {
      setIsSevenChars(false);
      setIsSubmitted(false);
    }
  }

  const handleSubmit = () => {
    setIsSubmitted(true);

    if (isSevenChars) {
      setImage(msdDance)
      const newAudio = new Audio(boleJoKoyal);
      newAudio.loop = true;
      setAudio(newAudio);
      newAudio.play();
    }
    else {
      setImage(msdAngry)
      const newAudio = new Audio(msdAngryAudio);
      newAudio.loop = true;
      setAudio(newAudio);
      newAudio.play();
    }
  }

  useEffect(() => {
    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0
      }
    }
  }, [audio])

  return (
    <>
      <div className="container">
        <h1>Is Thala the reason 7️⃣?</h1>
        <input
          type="text"
          placeholder='Enter a 7-character word'
          value={inputValue}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>
          Check
        </button>
        {
          isSubmitted && (
            <img src={image} />
          )
        }
      </div>
    </>
  )
}