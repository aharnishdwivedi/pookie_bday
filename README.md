# Happy Birthday Urvashi 💖

A beautiful, interactive birthday surprise website built with React.js and Vite.

## Features

✨ **Beautiful Design**
- Baby pink and pastel purple theme
- Hand-drawn, scrapbook-style aesthetic
- Fully responsive (mobile-first)
- Smooth animations and transitions

💖 **Interactive Elements**
- Floating hearts throughout the site
- Clickable hearts that burst into particles
- Hidden messages on long-press or click
- Cursor/finger trail hearts
- Easter egg: Tap anywhere 5 times quickly for confetti!

📸 **Photo Gallery**
- Polaroid-style photo display
- Gentle floating animations
- Hover effects on desktop
- Tap animations on mobile

🎵 **Music Player**
- Cute floating play/pause button
- Auto-plays after first user interaction
- Loops continuously at soft volume

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The website will open at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## Adding Your Content

### 1. Add Photos

1. Create an `images` folder in the `public` directory:
   ```bash
   mkdir public/images
   ```

2. Add your photos to `public/images/` (e.g., `photo1.jpg`, `photo2.jpg`, etc.)

3. Update `src/App.jsx` to include your photos:
   ```jsx
   const photos = [
     { src: '/images/photo1.jpg', alt: 'Memory 1', message: 'Beautiful moment 💖' },
     { src: '/images/photo2.jpg', alt: 'Memory 2' },
     // Add more photos...
   ];
   ```

### 2. Add Background Music

1. Add your MP3 file to the `public` folder (e.g., `birthday-song.mp3`)

2. The music player is already configured to use `/birthday-song.mp3`. If you use a different filename, update the `musicSrc` variable in `src/App.jsx`:
   ```jsx
   const musicSrc = '/your-music-file.mp3';
   ```

### 3. Customize the Birthday Message

Edit the message in `src/sections/BirthdayNote.jsx` or pass a custom message as a prop:
```jsx
<BirthdayNote message="Your custom message here..." />
```

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── PolaroidCard.jsx
│   ├── FloatingHearts.jsx
│   ├── ClickableHeart.jsx
│   ├── MusicPlayer.jsx
│   ├── ConfettiEffect.jsx
│   ├── HiddenMessage.jsx
│   └── HeartTrail.jsx
├── sections/           # Page sections
│   ├── LandingSection.jsx
│   ├── MemoryWall.jsx
│   ├── InteractiveFun.jsx
│   ├── BirthdayNote.jsx
│   └── FinalSection.jsx
├── App.jsx             # Main app component
└── index.css           # Global styles
```

## Customization

### Colors

Edit the CSS variables in `src/index.css`:
```css
:root {
  --baby-pink: #ffb6c1;
  --pastel-purple: #dda0dd;
  --soft-white: #fffef9;
  --pink-accent: #ff69b4;
  --light-purple: #f0e6ff;
  --light-pink: #ffeef5;
}
```

### Hidden Messages

Edit the messages in `src/sections/InteractiveFun.jsx`:
```jsx
const doodles = [
  { emoji: '⭐', message: 'Your custom message 💗' },
  // Add more...
];
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Technologies Used

- React.js 19
- Vite
- CSS3 Animations
- HTML5 Audio API

## Notes

- The website is frontend-only (no backend or database required)
- All photos and music files should be placed in the `public` folder
- The music player requires user interaction before playing (browser autoplay policy)
- The easter egg (5 quick taps) works on both desktop and mobile

## License

Built with love for Urvashi 💖

---

Made by Aharnish with lots of love and care! 💗
