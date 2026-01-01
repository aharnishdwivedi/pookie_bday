import { useState, useRef, useEffect } from 'react';
import './MusicPlayer.css';

const MusicPlayer = ({ audioSrc, onMusicControlReady }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);

  // Expose control methods to parent
  useEffect(() => {
    if (onMusicControlReady && audioRef.current) {
      onMusicControlReady({
        pause: () => {
          if (audioRef.current && isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
          }
        },
        resume: () => {
          if (audioRef.current && !isPlaying && hasInteracted) {
            audioRef.current.play();
            setIsPlaying(true);
          }
        },
      });
    }
  }, [onMusicControlReady, isPlaying, hasInteracted]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Soft volume
    }
  }, []);

  const handlePlayPause = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
    }

    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Auto-play after first user interaction
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!hasInteracted && audioRef.current && audioSrc) {
        setHasInteracted(true);
        audioRef.current.play().catch(() => {
          // Auto-play might fail, that's okay
        });
        setIsPlaying(true);
      }
    };

    document.addEventListener('click', handleFirstInteraction, { once: true });
    document.addEventListener('touchstart', handleFirstInteraction, { once: true });

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, [hasInteracted, audioSrc]);

  if (!audioSrc) {
    return null; // Don't render if no audio source
  }

  return (
    <div className="music-player-container">
      <audio ref={audioRef} loop>
        <source src={audioSrc} type="audio/mpeg" />
      </audio>
      <button
        className={`music-player-button ${isPlaying ? 'playing' : ''}`}
        onClick={handlePlayPause}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? '🎵' : '💿'}
      </button>
    </div>
  );
};

export default MusicPlayer;

