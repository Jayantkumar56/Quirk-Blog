

const toggleBtn  = document.getElementById('toggle-theme');
const savedTheme = localStorage.getItem('theme');
const themeLink  = document.getElementById('hljs-theme');

const lightTheme = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/nnfx-light.min.css";
const darkTheme  = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/obsidian.min.css";


if (savedTheme === 'light') {
    document.body.classList.remove('dark-mode');
    if (themeLink) {
        themeLink.href = lightTheme;
    }
} 
else if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    if (themeLink) {
        themeLink.href = darkTheme;
    }
}
else {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    
    if (prefersDarkScheme.matches) {
        document.body.classList.add('dark-mode');
        if (themeLink) {
            themeLink.href = darkTheme;
        }
    }
    else {
        if (themeLink) {
            themeLink.href = lightTheme;
        }
    }
}


toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

    if (themeLink) {
        if (isDarkMode) {
            themeLink.href = darkTheme;
        } else {
            themeLink.href = lightTheme;
        }
    }
});

document.querySelectorAll("pre.code-block").forEach((block) => {
    const buttonWrapper = document.createElement("div");
    buttonWrapper.classList.add("button-wrapper");
    block.appendChild(buttonWrapper);

    // Create button
    const button = document.createElement("button");
    button.innerText = "Copy";
    button.classList.add("copy-button");
    buttonWrapper.appendChild(button);

    // Copy on click
    button.addEventListener("click", async () => {
        const code = block.innerText;
        try {
            await navigator.clipboard.writeText(code);
            button.innerText = "Copied!";
            setTimeout(() => button.innerText = "Copy", 2000);
        } catch (err) {
            console.error("Failed to copy: ", err);
        }
    });
});
