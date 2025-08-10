

const toggleBtn  = document.getElementById('toggle-theme');
const savedTheme = localStorage.getItem('theme');


if (savedTheme === 'light') {
    document.body.classList.remove('dark-mode');
} 
else if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
}
else {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    
    if (prefersDarkScheme.matches) {
        document.body.classList.add('dark-mode');
    }
}



toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});
