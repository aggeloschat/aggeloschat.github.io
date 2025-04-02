document.addEventListener('DOMContentLoaded', function () {
  // Set current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Matrix background effect
  const matrixCanvas = document.getElementById('matrixCanvas');
  if (matrixCanvas) {
    initMatrixEffect(matrixCanvas);
  }

  // Animate skill bubbles on scroll
  const skillBubbles = document.querySelectorAll('.bubble');
  if (skillBubbles.length > 0) {
    animateSkillBubbles();
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Playground item click handlers
  const playgroundItems = document.querySelectorAll('.playground-item');
  playgroundItems.forEach(item => {
    item.addEventListener('click', function () {
      const demoType = this.getAttribute('data-demo');
      launchDemoUpdate(demoType);
    });
  });
});

// Matrix Rain
function initMatrixEffect(canvas) {
  const ctx = canvas.getContext('2d');
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
  const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const nums = '0123456789';
  const alphabet = katakana + latin + nums;

  const fontSize = 16;
  const columns = canvas.width / fontSize;
  const rainDrops = [];

  for (let x = 0; x < columns; x++) {
    rainDrops[x] = 1;
  }

  const draw = () => {
    ctx.fillStyle = 'rgba(10, 25, 47, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#64ffda';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < rainDrops.length; i++) {
      const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
      ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

      if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        rainDrops[i] = 0;
      }
      rainDrops[i]++;
    }
  };

  setInterval(draw, 30);

  window.addEventListener('resize', () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  });
}

function animateSkillBubbles() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bubbles = entry.target.querySelectorAll('.bubble');
        bubbles.forEach(bubble => {
          const level = bubble.getAttribute('data-level');
          bubble.style.setProperty('--width', level + '%');
          bubble.classList.add('animate');
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  const skillsContainer = document.querySelector('.skills-container');
  if (skillsContainer) {
    observer.observe(skillsContainer);
  }
}


function launchDemoUpdate(demoType) {
  // This would be expanded to show different interactive demos
  alert(`Upcoming ${demoType} demo! More info soon.`);

  // In a real implementation, this would:
  // 1. Create an overlay/modal
  // 2. Load the appropriate interactive demo
  // 3. For games: might use an iframe or canvas element
  // 4. For coding demos: might use a code editor component
}

function launchDemo(demoType) {
  // This would be expanded to show different interactive demos
  alert(`Launching ${demoType} demo! This would open an interactive playground.`);

  // In a real implementation, this would:
  // 1. Create an overlay/modal
  // 2. Load the appropriate interactive demo
  // 3. For games: might use an iframe or canvas element
  // 4. For coding demos: might use a code editor component
}


