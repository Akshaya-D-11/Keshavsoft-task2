// main.js
// Keep for future small interactivity (form hooks, analytics)

document.addEventListener('DOMContentLoaded', () => {
  // Example: prevent default contact form submission (client-side prototype)
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      alert('Message sent (demo). In production connect to backend or form service.');
    });
  }
});