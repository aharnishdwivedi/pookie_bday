import { useState } from 'react';
import './PolaroidCard.css';

const PolaroidCard = ({ image, alt = 'Memory', message = '', rotation = 0, index = 0 }) => {
  const [isClicked, setIsClicked] = useState(false);
  const randomRotation = rotation || (Math.random() * 8 - 4); // -4 to 4 degrees
  
  // Different bunny emojis for variety
  const bunnyEmojis = ['🐰', '🐇', '💖', '🌸', '✨', '⭐', '💕', '🌺'];
  const bunnyEmoji = bunnyEmojis[index % bunnyEmojis.length];

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300);
  };

  return (
    <div
      className={`polaroid-card bunny-frame ${isClicked ? 'bounce' : ''}`}
      style={{ transform: `rotate(${randomRotation}deg)` }}
      onClick={handleClick}
    >
      <div className="bunny-decoration bunny-top-left">{bunnyEmoji}</div>
      <div className="bunny-decoration bunny-top-right">{bunnyEmoji}</div>
      <div className="bunny-decoration bunny-bottom-left">{bunnyEmoji}</div>
      <div className="bunny-decoration bunny-bottom-right">{bunnyEmoji}</div>
      
      <div className="polaroid-image-wrapper bunny-frame-inner">
        <div className="bunny-corner bunny-corner-tl">🐰</div>
        <div className="bunny-corner bunny-corner-tr">🐇</div>
        <div className="bunny-corner bunny-corner-bl">💖</div>
        <div className="bunny-corner bunny-corner-br">🌸</div>
        <img src={image} alt={alt} className="polaroid-image" />
      </div>
      {message && <div className="polaroid-message">{message}</div>}
    </div>
  );
};

export default PolaroidCard;

