# Talwalus — Personal Profile Website

Website profil pribadi berbasis HTML, CSS, dan JavaScript. Gaya informal, santai, modern, aesthetic, dark mode + neon.

## Cara Menjalankan

1. Buka folder `website-profile`
2. Double-click `index.html` atau buka via Live Server di VS Code
3. Langsung jalan di browser (tidak butuh server khusus untuk HTML/CSS/JS)

## Ganti Media

### Foto Profil
- Ganti URL di `index.html` (class `avatar`) atau taruh file di `assets/images/profile.jpg` lalu update `src`.

### Galeri Foto
- Edit bagian `#gallery-grid` di `index.html`.
- Ganti URL Unsplash dengan foto sendiri atau path lokal (`assets/images/...`).

### Musik
1. Taruh file MP3 di folder `assets/music/` (contoh: `lagu-1.mp3`, `lagu-2.mp3`)
2. Buka `script.js` → cari array `playlist`
3. Update `src`, `title`, `artist`, `cover`, `duration`

### Video Lokal
1. Taruh file MP4 di `assets/videos/`
2. Update tag `<video>` di section Videos

### Video YouTube
- Ganti `VIDEO_ID` di atribut `src` iframe (`https://www.youtube.com/embed/VIDEO_ID`)

### Link Social Media
- Ganti placeholder `[Link Instagram]`, dll. di section Social.

## Fitur

- Dark mode (default) + toggle light mode
- Typing animation di hero
- Custom music player (play/pause, next/prev, progress, volume)
- Gallery masonry + lightbox (next/prev/keyboard)
- Glassmorphism, glow, floating shapes, hover effects
- Responsive (desktop, tablet, mobile)
- Smooth scrolling + sticky navbar
- Fade-in on scroll

## Struktur Folder

```
website-profile/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── images/
    ├── music/
    └── videos/
```

Enjoy! Stay weird, stay awesome. ✨
