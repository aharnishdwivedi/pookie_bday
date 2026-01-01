import { useState } from 'react';
import './HiddenMessage.css';

const HiddenMessage = ({ children, message, emoji = '💖' }) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [longPressTimer, setLongPressTimer] = useState(null);

  const handleMouseDown = () => {
    const timer = setTimeout(() => {
      setIsRevealed(true);
      setTimeout(() => setIsRevealed(false), 3000);
    }, 500); // 500ms long press
    setLongPressTimer(timer);
  };

  const handleMouseUp = () => {
    if (longPressTimer) {
      clearTimeout(longPressTimer);
      setLongPressTimer(null);
    }
  };

  const handleClick = () => {
    setIsRevealed(true);
    setTimeout(() => setIsRevealed(false), 3000);
  };

  return (
    <div
      className="hidden-message-wrapper"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      onClick={handleClick}
    >
      {children}
      {isRevealed && (
        <div className="hidden-message-bubble">
          <span className="message-emoji">{emoji}</span>
          <span className="message-text">{message}</span>
        </div>
      )}
    </div>
  );
};

export default HiddenMessage;

