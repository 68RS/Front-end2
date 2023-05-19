const darkRef = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const darkModeToggle = document.getElementById('dark-mode-toggle');

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

if (darkRef) {
    toggleDarkMode();
}

darkModeToggle.addEventListener('click', toggleDarkMode);