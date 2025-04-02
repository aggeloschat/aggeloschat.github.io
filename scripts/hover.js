

const buttons = document.querySelectorAll('.hover-button');
const hoverSound = document.getElementById('hover-sound');

const cooldownTime = 600; // milliseconds

// Track cooldowns per button
const cooldowns = new Map();

buttons.forEach(button => {
  // Initialize button's cooldown as ready
  cooldowns.set(button, true);

  button.addEventListener('mouseenter', () => {
    if (!cooldowns.get(button)) return;

    // Play the sound
    hoverSound.currentTime = 0;
    hoverSound.play().catch(err => {
      console.error("⚠️ Sound failed to play:", err);
    });

    // Start cooldown
    cooldowns.set(button, false);
    setTimeout(() => {
      cooldowns.set(button, true);
    }, cooldownTime);
  });
});

