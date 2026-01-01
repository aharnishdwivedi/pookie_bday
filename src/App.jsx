import { useState, useEffect, useRef } from 'react';
import LandingSection from './sections/LandingSection';
import MemoryWall from './sections/MemoryWall';
import InteractiveFun from './sections/InteractiveFun';
import BirthdayNote from './sections/BirthdayNote';
import VideoSection from './sections/VideoSection';
import FinalSection from './sections/FinalSection';
import FloatingHearts from './components/FloatingHearts';
import MusicPlayer from './components/MusicPlayer';
import ConfettiEffect from './components/ConfettiEffect';
import HeartTrail from './components/HeartTrail';
import './App.css';

// Import images
import herImage from './assets/her.png';
import she1Image from './assets/she1.jpeg';
import she2Image from './assets/she2.jpeg';
import usImage from './assets/us.png';
import us1Image from './assets/us1.jpeg';
import us2Image from './assets/us2.png';
import us3Image from './assets/us3.jpeg';
import us4Image from './assets/us4.jpeg';
import us5Image from './assets/us5.jpeg';
import us6Image from './assets/us6.jpeg';
import us8Image from './assets/us8.jpeg';
import bdayMusic from './assets/bday.mp3';
import videoSrc from './assets/video.mp4';

function App() {
  const [confettiTrigger, setConfettiTrigger] = useState(0);
  const [tapCount, setTapCount] = useState(0);
  const [lastTapTime, setLastTapTime] = useState(0);
  const musicControlRef = useRef(null);

  // Easter egg: 5 quick taps = confetti
  useEffect(() => {
    const handleTap = (e) => {
      const currentTime = Date.now();
      const timeSinceLastTap = currentTime - lastTapTime;

      if (timeSinceLastTap < 500) {
        // Within 500ms of last tap
        setTapCount((prev) => {
          const newCount = prev + 1;
          if (newCount >= 5) {
            setConfettiTrigger((prev) => prev + 1);
            return 0;
          }
          return newCount;
        });
      } else {
        // Reset if too much time passed
        setTapCount(1);
      }

      setLastTapTime(currentTime);
    };

    document.addEventListener('click', handleTap);
    document.addEventListener('touchstart', handleTap);

    return () => {
      document.removeEventListener('click', handleTap);
      document.removeEventListener('touchstart', handleTap);
    };
  }, [lastTapTime]);

  // Photos array - her.png and she1.jpeg are the main images at the start
  const photos = [
    { src: herImage, alt: 'Urvashi', message: 'Beautiful moment 💖' },
    { src: she1Image, alt: 'Urvashi', message: 'So gorgeous ✨' },
    { src: she2Image, alt: 'Urvashi', message: 'Amazing times! 🌟' },
    { src: usImage, alt: 'Together', message: 'Best memories 💕' },
    { src: us1Image, alt: 'Together', message: 'Love this! 💖' },
    { src: us2Image, alt: 'Together', message: 'Perfect moments ✨' },
    { src: us3Image, alt: 'Together', message: 'So happy! 💗' },
    { src: us4Image, alt: 'Together', message: 'Beautiful times 🌟' },
    { src: us5Image, alt: 'Together', message: 'Amazing! 💕' },
    { src: us6Image, alt: 'Together', message: 'Love you! 💖' },
    { src: us8Image, alt: 'Together', message: 'Best memories ✨' },
  ];

  const firstImage = herImage;
  const secondImage = she1Image;
  const lastImage = us8Image;

  // Music file path
  const musicSrc = bdayMusic;

  return (
    <div className="App">
      <HeartTrail />
      <FloatingHearts count={25} />
      <ConfettiEffect trigger={confettiTrigger} />
      <MusicPlayer 
        audioSrc={musicSrc} 
        onMusicControlReady={(controls) => {
          musicControlRef.current = controls;
        }}
      />
      
      <LandingSection secondImage={secondImage} />
      <MemoryWall photos={photos} />
      <InteractiveFun />
      <BirthdayNote />
      <VideoSection 
        videoSrc={videoSrc}
        onVideoPlay={() => {
          if (musicControlRef.current) {
            musicControlRef.current.pause();
          }
        }}
        onVideoPause={() => {
          if (musicControlRef.current) {
            musicControlRef.current.resume();
          }
        }}
      />
      <FinalSection lastImage={lastImage} />
    </div>
  );
}

export default App;
