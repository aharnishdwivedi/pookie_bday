import { useState, useRef, useEffect } from 'react';
import './VideoSection.css';

const VideoSection = ({ videoSrc, onVideoPlay, onVideoPause }) => {
  const videoRef = useRef(null);
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => {
      onVideoPlay?.();
      // Create hearts when video plays
      createHearts();
    };

    const handlePause = () => {
      onVideoPause?.();
    };

    const handleEnded = () => {
      onVideoPause?.();
    };

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
    };
  }, [onVideoPlay, onVideoPause]);

  const createHearts = () => {
    const newHearts = Array.from({ length: 8 }, (_, i) => ({
      id: Date.now() + i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
    }));
    setHearts((prev) => [...prev, ...newHearts]);

    // Remove hearts after animation
    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => !newHearts.includes(h)));
    }, 2000);
  };

  // Create hearts periodically while video is playing
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const interval = setInterval(() => {
      if (!video.paused && !video.ended) {
        createHearts();
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="video-section">
      <h2 className="video-section-title">A Special Video 💖</h2>
      <div className="video-container-wrapper">
        <div className="video-polaroid-frame bunny-video-frame">
          <div className="bunny-video-decoration bunny-video-1">🐰</div>
          <div className="bunny-video-decoration bunny-video-2">🐇</div>
          <div className="bunny-video-decoration bunny-video-3">💖</div>
          <div className="bunny-video-decoration bunny-video-4">🌸</div>
          
          <div className="video-inner-frame">
            <div className="bunny-video-corner bunny-video-corner-tl">🐰</div>
            <div className="bunny-video-corner bunny-video-corner-tr">🐇</div>
            <div className="bunny-video-corner bunny-video-corner-bl">💖</div>
            <div className="bunny-video-corner bunny-video-corner-br">🌸</div>
            
            <video
              ref={videoRef}
              src={videoSrc}
              className="polaroid-video"
              controls
              playsInline
              preload="metadata"
            >
              Your browser does not support the video tag.
            </video>
            
            {/* Floating hearts overlay */}
            <div className="video-hearts-overlay">
              {hearts.map((heart) => (
                <div
                  key={heart.id}
                  className="video-heart"
                  style={{
                    left: `${heart.left}%`,
                    animationDelay: `${heart.delay}s`,
                  }}
                >
                  💖
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

