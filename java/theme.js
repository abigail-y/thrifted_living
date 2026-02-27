document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('theme-switch');
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

  toggle.checked = isDark;

  toggle.addEventListener('change', () => {
    const theme = toggle.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  });
});