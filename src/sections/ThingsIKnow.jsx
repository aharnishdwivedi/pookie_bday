import { useState, useEffect } from 'react';
import './ThingsIKnow.css';

const ThingsIKnow = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [showPromise, setShowPromise] = useState(false);

  const things = [
    "Being yelled at makes you shut down.",
    "Music is your therapy.",
    "When you love, you love hard.",
    "You distance yourself from everyone when life gets tough.",
    "You put other people's feelings before your own.",
    "You are an overthinker.",
    "You take every word and everything to heart.",
    "You remember more negative things said to you than positive.",
  ];

  useEffect(() => {
    // Animate items appearing one by one
    things.forEach((_, index) => {
      setTimeout(() => {
        setVisibleItems((prev) => [...prev, index]);
      }, index * 300);
    });
    
    // Show promise message after all items are visible
    setTimeout(() => {
      setShowPromise(true);
    }, things.length * 300 + 500);
  }, []);

  return (
    <section className="things-i-know-section">
      <h2 className="things-section-title">Things I Know About You 💕</h2>
      <div className="things-container">
        <div className="things-list-wrapper">
          {things.map((thing, index) => (
            <div
              key={index}
              className={`thing-item ${visibleItems.includes(index) ? 'visible' : ''}`}
            >
              <div className="thing-bunny">🐰</div>
              <div className="thing-content">
                <p className="thing-text">{thing}</p>
              </div>
              <div className="thing-heart">💖</div>
            </div>
          ))}
        </div>
        
        <div className={`promise-message ${showPromise ? 'visible' : ''}`}>
          <div className="promise-hearts">
            <span className="promise-heart">💖</span>
            <span className="promise-heart">💕</span>
            <span className="promise-heart">💖</span>
          </div>
          <p className="promise-text">
            And yes, I love the Imprefect you, the lazy you, the stubborn you, the angry you, the sad you, the happy you, the you and I am never gonna leave you when things get hard. Promise.
          </p>
          <div className="promise-hearts">
            <span className="promise-heart">💖</span>
            <span className="promise-heart">💕</span>
            <span className="promise-heart">💖</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThingsIKnow;

