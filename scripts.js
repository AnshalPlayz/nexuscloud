document.addEventListener('DOMContentLoaded', function() {
    const themeSwitcher = document.getElementById('themeSwitcher');

    // Set the initial theme based on system preference
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDarkScheme) {
        document.body.classList.add('dark-theme');
        themeSwitcher.checked = true;
    } else {
        document.body.classList.add('light-theme');
        themeSwitcher.checked = false;
    }

    // Toggle theme on switch change
    themeSwitcher.addEventListener('change', function() {
        document.body.classList.add('transition');
        setTimeout(() => {
            document.body.classList.toggle('dark-theme');
            document.body.classList.toggle('light-theme');
            document.body.classList.remove('transition');
        }, 300);
    });
});
