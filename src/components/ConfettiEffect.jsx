import { useEffect, useState } from 'react';
import './ConfettiEffect.css';

const ConfettiEffect = ({ trigger }) => {
  const [confetti, setConfetti] = useState([]);

  useEffect(() => {
    if (trigger) {
      const newConfetti = Array.from({ length: 100 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.5,
        duration: 2 + Math.random() * 2,
        emoji: ['🎉', '🎊', '✨', '💖', '⭐', '🌟'][Math.floor(Math.random() * 6)],
        size: 20 + Math.random() * 20,
      }));
      setConfetti(newConfetti);

      // Clear confetti after animation
      setTimeout(() => {
        setConfetti([]);
      }, 4000);
    }
  }, [trigger]);

  if (confetti.length === 0) return null;

  return (
    <div className="confetti-container">
      {confetti.map((item) => (
        <div
          key={item.id}
          className="confetti-item"
          style={{
            left: `${item.left}%`,
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.duration}s`,
            fontSize: `${item.size}px`,
          }}
        >
          {item.emoji}
        </div>
      ))}
    </div>
  );
};

export default ConfettiEffect;

