import { useEffect, useState } from 'react';
import './HeartTrail.css';

const HeartTrail = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    let heartId = 0;

    const createHeart = (x, y, isTouch = false) => {
      const heart = {
        id: heartId++,
        x,
        y,
        isTouch,
      };
      setHearts((prev) => [...prev, heart]);

      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== heart.id));
      }, 1000);
    };

    const handleMouseMove = (e) => {
      createHeart(e.clientX, e.clientY, false);
    };

    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      if (touch) {
        createHeart(touch.clientX, touch.clientY, true);
      }
    };

    // Throttle for performance
    let mouseTimeout;
    const throttledMouseMove = (e) => {
      clearTimeout(mouseTimeout);
      mouseTimeout = setTimeout(() => handleMouseMove(e), 50);
    };

    let touchTimeout;
    const throttledTouchMove = (e) => {
      clearTimeout(touchTimeout);
      touchTimeout = setTimeout(() => handleTouchMove(e), 50);
    };

    window.addEventListener('mousemove', throttledMouseMove);
    window.addEventListener('touchmove', throttledTouchMove);

    return () => {
      window.removeEventListener('mousemove', throttledMouseMove);
      window.removeEventListener('touchmove', throttledTouchMove);
      clearTimeout(mouseTimeout);
      clearTimeout(touchTimeout);
    };
  }, []);

  return (
    <div className="heart-trail-container">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className={`heart-trail ${heart.isTouch ? 'touch' : ''}`}
          style={{
            left: `${heart.x}px`,
            top: `${heart.y}px`,
          }}
        >
          💖
        </div>
      ))}
    </div>
  );
};

export default HeartTrail;

