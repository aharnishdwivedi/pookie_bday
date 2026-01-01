import { useState } from 'react';
import './ClickableHeart.css';

const ClickableHeart = ({ x, y, message = '' }) => {
  const [isBurst, setIsBurst] = useState(false);
  const [particles, setParticles] = useState([]);
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    if (isBurst) return;

    setIsBurst(true);
    if (message) {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 2000);
    }
    
    // Create particles with calculated positions
    const newParticles = Array.from({ length: 12 }, (_, i) => {
      const angle = (i * 360) / 12;
      const distance = 50 + Math.random() * 50;
      const angleRad = (angle * Math.PI) / 180;
      return {
        id: i,
        angle,
        distance,
        x: Math.cos(angleRad) * distance,
        y: Math.sin(angleRad) * distance,
      };
    });
    setParticles(newParticles);

    setTimeout(() => {
      setIsBurst(false);
      setParticles([]);
    }, 1000);
  };

  return (
    <div
      className={`clickable-heart ${isBurst ? 'burst' : ''}`}
      style={{ left: `${x}%`, top: `${y}%` }}
      onClick={handleClick}
    >
      <span className="heart-emoji">💖</span>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            '--x': `${particle.x}px`,
            '--y': `${particle.y}px`,
          }}
        >
          ✨
        </div>
      ))}
      {message && showMessage && <div className="heart-message">{message}</div>}
    </div>
  );
};

export default ClickableHeart;

