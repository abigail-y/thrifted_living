document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('theme-switch');

  const saved = localStorage.getItem('theme');
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = saved === 'dark' || (!saved && systemDark);

  if (isDark) {
    document.documentElement.setAttribute('data-theme', 'dark');
    toggle.checked = true;
  }

  toggle.addEventListener('change', () => {
    const theme = toggle.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  });
});