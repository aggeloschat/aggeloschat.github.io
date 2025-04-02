const music = document.getElementById("bg-music");
const toggle = document.getElementById("sound-toggle");

let isPlaying = false;

toggle.addEventListener("click", () => {
  if (!isPlaying) {
    music.volume = 0.2;
    music.play();
    toggle.textContent = "✖️ Mute";
  } else {
    music.pause();
    toggle.textContent = "🎧 Play";
  }
  isPlaying = !isPlaying;
});

window.addEventListener('load', () => {
  console.log('Page is loaded!');
  mainFunction();

})

