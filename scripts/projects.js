document.addEventListener('DOMContentLoaded', function () {
  // Set current date in footer
  const now = new Date();
  document.getElementById('current-date').textContent = now.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  // Filter functionality
  const filterButtons = document.querySelectorAll('.filter-buttons button');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filter = button.dataset.filter;

      // Filter projects
      projectCards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Search functionality
  const searchInput = document.querySelector('.search-box input');
  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();

    projectCards.forEach(card => {
      const title = card.querySelector('h2').textContent.toLowerCase();
      const description = card.querySelector('p').textContent.toLowerCase();
      const tech = card.querySelector('.project-tech').textContent.toLowerCase();

      if (title.includes(searchTerm) || description.includes(searchTerm) || tech.includes(searchTerm)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });

  // Initialize Matrix effect
  const canvas = document.getElementById('projectsCanvas');
  if (canvas) {
    initMatrixEffect(canvas);
  }
});

// Use one of the Matrix effects from earlier
function initMatrixEffect(canvas) {
  // Paste your chosen Matrix effect implementation here
  // (Binary Rain, Hex Code, or Circuit Board)
}
