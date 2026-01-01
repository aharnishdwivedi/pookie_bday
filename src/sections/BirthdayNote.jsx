import { useState, useEffect } from 'react';
import './BirthdayNote.css';

const BirthdayNote = ({ message }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  const defaultMessage = `Hi Urvashi,

Happy birthday to you! I really wish ki ye saal teri zindagi ka sabse accha saal jaye. Kyu chahata hoon mai ye ab tum sochogi, kyunki tum jabse aai ho meri zindagi mein tabse life kafi acchi chal rhi hai. Nahi yaad kab tumse baat krte krte mai tere pyaar mein gir gaya. Sach bolu? Mai selfish hoon, mujhe pura din teri yaad aati hai aur tum halka se late reply kro tho mai chid chid ho jata hoon. Koi ni, kuch din mein ye obsession control kr luga mai. Tere baarein mein sochkr mujhe aur mehnat aur kamyab hone ki energy milti hai, and I want to do this motivation for you too - jldi, successful ban mere liye tu. I really mean it cutie, I love you from the bottom of my heart. Tera gift pending hai, next jab hum milege tab tumhe duga (pakka).

Your truly,

cutu (I love this) 💖`;

  const textToDisplay = message || defaultMessage;

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < textToDisplay.length) {
        setDisplayedText(textToDisplay.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, 30); // Typing speed

    return () => clearInterval(interval);
  }, [textToDisplay]);

  return (
    <section className="birthday-note">
      <div className="note-container">
        <div className="note-paper">
          <div className="note-header">
            <span className="note-heart">💖</span>
            <h2 className="note-title">A Special Note</h2>
            <span className="note-heart">💖</span>
          </div>
          <div className="note-content">
            <p className="typewriter-text">
              {displayedText}
              {!isComplete && <span className="cursor">|</span>}
            </p>
          </div>
          <div className="note-decoration">
            <span className="decoration">✨</span>
            <span className="decoration">💕</span>
            <span className="decoration">✨</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BirthdayNote;

