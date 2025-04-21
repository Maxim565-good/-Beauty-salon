function openModal() {
  document.getElementById('contactModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('contactModal').classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.getElementById('contactModal').addEventListener('click', function(e) {
  if (e.target === this) {
    closeModal();
  }
});

// Track social media clicks for analytics
document.querySelectorAll('.social-link').forEach(function(link) {
  link.addEventListener('click', function(e) {
    console.log('Переход по ссылке: ' + this.getAttribute('href'));
    // Here you could add actual analytics tracking code
  });
});