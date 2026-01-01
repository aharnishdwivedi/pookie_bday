import { useState, useEffect } from 'react';
import FloatingHearts from '../components/FloatingHearts';
import './LandingSection.css';

const LandingSection = ({ firstImage, secondImage }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="landing-section">
      <FloatingHearts count={15} />
      <div className={`landing-content ${isVisible ? 'visible' : ''}`}>
        <div className="main-images-container">
          <h2 className="beautiful-heading">
            Happy birthday to the prettiest, most beautiful, charming and fun to talk cutie on this planet
            <span className="name-highlight"> Urvashi</span>
            <span className="heart-emoji"> 💖</span>
          </h2>
          <div className="main-images-wrapper">
            {secondImage && (
              <div className="main-photo-container bunny-photo-frame">
                <div className="bunny-frame-bunny bunny-1">🐇</div>
                <div className="bunny-frame-bunny bunny-2">🐰</div>
                <div className="bunny-frame-bunny bunny-3">✨</div>
                <div className="bunny-frame-bunny bunny-4">💕</div>
                <img src={secondImage} alt="Urvashi" className="main-photo" />
              </div>
            )}
          </div>
        </div>
        <div className="sparkles">
          <span className="sparkle">✨</span>
          <span className="sparkle">⭐</span>
          <span className="sparkle">✨</span>
          <span className="sparkle">🌟</span>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;

