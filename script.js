/* ===== Talwalus Profile Website - Script ===== */

// ----- Typing Effect -----
const typingTexts = [
  "Just vibing and enjoying life.",
  "Welcome to my little corner.",
  "Nothing serious, just me.",
  "Ngulik hal random every day ✨"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingEl = document.getElementById('typing-text');
const typingSpeed = 80;
const deleteSpeed = 40;
const pauseTime = 2000;

function typeEffect() {
  if (!typingEl) return;
  const current = typingTexts[textIndex];
  
  if (isDeleting) {
    typingEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
  }

  let delay = isDeleting ? deleteSpeed : typingSpeed;

  if (!isDeleting && charIndex === current.length) {
    delay = pauseTime;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % typingTexts.length;
    delay = 400;
  }

  setTimeout(typeEffect, delay);
}

// ----- Navbar Scroll & Mobile Menu -----
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
}

// Close menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger?.classList.remove('active');
    navMenu?.classList.remove('active');
  });
});

// ----- Theme Toggle -----
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

const savedTheme = localStorage.getItem('theme') || 'dark';
if (savedTheme === 'light') {
  html.setAttribute('data-theme', 'light');
  themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle?.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  if (current === 'light') {
    html.removeAttribute('data-theme');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    localStorage.setItem('theme', 'dark');
  } else {
    html.setAttribute('data-theme', 'light');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    localStorage.setItem('theme', 'light');
  }
});

// ----- Year in Footer -----
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ----- Fade-in on Scroll -----
const fadeEls = document.querySelectorAll('.section, .hobby-card, .fact-card, .video-card, .about-card, .about-text');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in', 'visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

fadeEls.forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// ----- Gallery Lightbox -----
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxPrev = document.getElementById('lightbox-prev');
const lightboxNext = document.getElementById('lightbox-next');

let currentIndex = 0;
const galleryData = [];

galleryItems.forEach((item, i) => {
  const img = item.querySelector('img');
  const overlay = item.querySelector('.gallery-overlay span');
  galleryData.push({
    src: img.src,
    alt: img.alt,
    caption: overlay ? overlay.textContent : img.alt
  });

  item.addEventListener('click', () => {
    currentIndex = i;
    openLightbox();
  });
});

function openLightbox() {
  const data = galleryData[currentIndex];
  lightboxImg.src = data.src;
  lightboxImg.alt = data.alt;
  lightboxCaption.textContent = data.caption;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

function showPrev() {
  currentIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
  openLightbox();
}

function showNext() {
  currentIndex = (currentIndex + 1) % galleryData.length;
  openLightbox();
}

lightboxClose?.addEventListener('click', closeLightbox);
lightboxPrev?.addEventListener('click', showPrev);
lightboxNext?.addEventListener('click', showNext);

lightbox?.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('active')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') showPrev();
  if (e.key === 'ArrowRight') showNext();
});

// ----- Custom Music Player -----
/*
  Ganti src dan cover dengan file lokal di assets/music/ dan assets/images/
  Contoh:
  src: "assets/music/lagu-1.mp3"
  cover: "assets/images/cover-1.jpg"
*/
const playlist = [
  {
    title: "Pretender",
    artist: "Official HIGE DANdism",
    src: "assets/music/lagu-1.mp3",
    cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop",
    duration: "5:26"
  },
  {
    title: "Lemon",
    artist: "Kenshi Yonezu",
    src: "assets/music/lagu-2.mp3",
    cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
    duration: "4:15"
  },
  {
    title: "Inferno",
    artist: "Mrs. GREEN APPLE",
    src: "assets/music/lagu-3.mp3",
    cover: "https://images.unsplash.com/photo-1514525253161-7a26d98d5739?w=300&h=300&fit=crop",
    duration: "3:48"
  },
  {
    title: "Gurenge",
    artist: "LiSA",
    src: "assets/music/lagu-4.mp3",
    cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop",
    duration: "3:58"
  }
];

const audio = document.getElementById('audio-player');
const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const progressBar = document.getElementById('progress-bar');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const volumeSlider = document.getElementById('volume-slider');
const albumArt = document.getElementById('album-art');
const trackTitle = document.getElementById('track-title');
const trackArtist = document.getElementById('track-artist');
const playlistEl = document.getElementById('playlist');

let currentTrack = 0;
let isPlaying = false;

// Build playlist UI
function renderPlaylist() {
  if (!playlistEl) return;
  playlistEl.innerHTML = '';
  playlist.forEach((track, i) => {
    const item = document.createElement('div');
    item.className = `playlist-item ${i === currentTrack ? 'active' : ''}`;
    item.innerHTML = `
      <img src="${track.cover}" alt="${track.title}">
      <div class="info">
        <h4>${track.title}</h4>
        <p>${track.artist}</p>
      </div>
      <span class="duration">${track.duration}</span>
    `;
    item.addEventListener('click', () => {
      loadTrack(i);
      playTrack();
    });
    playlistEl.appendChild(item);
  });
}

function loadTrack(index) {
  currentTrack = index;
  const track = playlist[currentTrack];
  audio.src = track.src;
  albumArt.src = track.cover;
  trackTitle.textContent = track.title;
  trackArtist.textContent = track.artist;
  durationEl.textContent = track.duration;
  progress.style.width = '0%';
  currentTimeEl.textContent = '0:00';
  
  // Update active playlist item
  document.querySelectorAll('.playlist-item').forEach((el, i) => {
    el.classList.toggle('active', i === currentTrack);
  });
}

function playTrack() {
  // Try to play - may fail if file not found
  const playPromise = audio.play();
  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        isPlaying = true;
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        albumArt.classList.add('playing');
      })
      .catch(() => {
        // File not available - show friendly message
        isPlaying = false;
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
        albumArt.classList.remove('playing');
        trackTitle.textContent = playlist[currentTrack].title + ' (file belum ada)';
        console.info('Audio file not found. Letakkan file di assets/music/ sesuai nama di playlist.');
      });
  }
}

function pauseTrack() {
  audio.pause();
  isPlaying = false;
  playBtn.innerHTML = '<i class="fas fa-play"></i>';
  albumArt.classList.remove('playing');
}

function togglePlay() {
  if (isPlaying) {
    pauseTrack();
  } else {
    playTrack();
  }
}

function prevTrack() {
  currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
  loadTrack(currentTrack);
  if (isPlaying) playTrack();
}

function nextTrack() {
  currentTrack = (currentTrack + 1) % playlist.length;
  loadTrack(currentTrack);
  if (isPlaying) playTrack();
}

// Format time
function formatTime(sec) {
  if (isNaN(sec)) return '0:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

// Event listeners
playBtn?.addEventListener('click', togglePlay);
prevBtn?.addEventListener('click', prevTrack);
nextBtn?.addEventListener('click', nextTrack);

audio?.addEventListener('timeupdate', () => {
  if (audio.duration) {
    const percent = (audio.currentTime / audio.duration) * 100;
    progress.style.width = percent + '%';
    currentTimeEl.textContent = formatTime(audio.currentTime);
  }
});

audio?.addEventListener('loadedmetadata', () => {
  durationEl.textContent = formatTime(audio.duration);
});

audio?.addEventListener('ended', () => {
  nextTrack();
});

progressBar?.addEventListener('click', (e) => {
  if (!audio.duration) return;
  const rect = progressBar.getBoundingClientRect();
  const percent = (e.clientX - rect.left) / rect.width;
  audio.currentTime = percent * audio.duration;
});

volumeSlider?.addEventListener('input', () => {
  audio.volume = volumeSlider.value;
});

// Init player
if (audio) {
  audio.volume = 0.7;
  loadTrack(0);
  renderPlaylist();
}

// ----- Init -----
document.addEventListener('DOMContentLoaded', () => {
  typeEffect();
});
