document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('.glow-link');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      setTimeout(() => {
        window.location.href = link.getAttribute('href');
      }, 500);
    });
  });
});