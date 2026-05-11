function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        const toast = document.getElementById('copy-toast');
        if (toast) {
            toast.classList.add('opacity-100');
            toast.classList.remove('opacity-0');
            
            setTimeout(() => {
                toast.classList.add('opacity-0');
                toast.classList.remove('opacity-100');
            }, 2000);
        }
    });
}

// Logica pentru scroll fin la anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});