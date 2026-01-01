import { useState } from 'react';
import ClickableHeart from '../components/ClickableHeart';
import HiddenMessage from '../components/HiddenMessage';
import './InteractiveFun.css';

const InteractiveFun = () => {
  const [clickableHearts] = useState([
    { x: 20, y: 30, message: 'Meri Pyari Badmosh! 💖' },
    { x: 80, y: 20, message: 'Pyarri penguin ✨' },
    { x: 15, y: 70, message: 'Best Pyarri on this planet! 🌟' },
    { x: 85, y: 60, message: 'Love you cutiee! 💕' },
    { x: 50, y: 40, message: 'Happy Birthday from yout cutu 🎉' },
  ]);

  const doodles = [
    { emoji: '⭐', message: 'Your smile makes my day better cutie 💗' },
    { emoji: '🌟', message: 'I miss you all day (Sacchi)🥺' },
    { emoji: '💫', message: 'I want to see you getting all the sucess and happiness on this planet ✨' },
    { emoji: '🎨', message: 'My wish Teri Job lag jaye iss saal aur tu ab humesha khush rahe  💖' },
  ];

  return (
    <section className="interactive-fun">
      <h2 className="section-title">Click & Discover! 🎁</h2>
      <div className="interactive-content">
        <div className="clickable-hearts-container">
          {clickableHearts.map((heart, index) => (
            <ClickableHeart
              key={index}
              x={heart.x}
              y={heart.y}
              message={heart.message}
            />
          ))}
        </div>
        <div className="doodles-container">
          <p className="instruction-text">
            Tap or long-press the doodles below to reveal secret messages! 👇
          </p>
          <div className="doodles-grid">
            {doodles.map((doodle, index) => (
              <HiddenMessage
                key={index}
                message={doodle.message}
                emoji={doodle.emoji}
              >
                <div className="doodle-item">
                  <span className="doodle-emoji">{doodle.emoji}</span>
                </div>
              </HiddenMessage>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveFun;

