# Quick Setup Guide

## 🚀 Getting Started (5 minutes)

### Step 1: Add Photos
1. Place Urvashi's photos in `public/images/` folder
2. Open `src/App.jsx`
3. Find the `photos` array (around line 50)
4. Add your photos like this:
   ```jsx
   const photos = [
     { src: '/images/photo1.jpg', alt: 'Memory 1', message: 'Beautiful moment 💖' },
     { src: '/images/photo2.jpg', alt: 'Memory 2' },
     { src: '/images/photo3.jpg', alt: 'Memory 3', message: 'Amazing times! ✨' },
   ];
   ```

### Step 2: Add Music (Optional)
1. Place your MP3 file in `public/` folder (name it `birthday-song.mp3`)
2. Or update the filename in `src/App.jsx`:
   ```jsx
   const musicSrc = '/your-music-file.mp3';
   ```

### Step 3: Customize Message (Optional)
1. Open `src/sections/BirthdayNote.jsx`
2. Edit the `defaultMessage` variable with your personal message

### Step 4: Run!
```bash
npm run dev
```

Visit `http://localhost:5173` to see your website!

## 📦 Build for Production

```bash
npm run build
```

The files will be in the `dist` folder. You can deploy this to:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

## 🎨 Features to Try

1. **Click the hearts** - They burst into particles!
2. **Tap doodles** - Long press or click to reveal secret messages
3. **Easter egg** - Tap anywhere 5 times quickly for confetti! 🎉
4. **Move your cursor** - Hearts follow your mouse/touch
5. **Music player** - Click the floating button to play/pause

## 💡 Tips

- First photo appears in landing section
- Last photo appears in final section
- All photos display in polaroid style in the memory wall
- Website is fully responsive - test on mobile!

---

**That's it! Your birthday surprise website is ready!** 💖

