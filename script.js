document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.top-nav');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      nav.classList.add('blur');
    } else {
      nav.classList.remove('blur');
    }
  });
});
