const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Apply the saved theme (if any)
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  body.classList.add('dark');
  themeToggle.textContent = '🌞'; // Sun for dark mode
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  const isDarkMode = body.classList.contains('dark');
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  themeToggle.textContent = isDarkMode ? '🌞' : '🌙'; // Toggle icons
});
