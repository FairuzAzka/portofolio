// Script untuk efek hover dan interaksi lainnya (opsional)
const nama = document.getElementById('nama');
const pesan = document.getElementById('pesan');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const successMsg = document.createElement('div');
    successMsg.className = 'success-message';
    successMsg.innerHTML = `
        ✅ Message from <strong>${nama.value}</strong> has been sent!
    `;
    
    form.parentNode.insertBefore(successMsg, form.nextSibling);
    
    setTimeout(() => {
        successMsg.style.opacity = '0';
        setTimeout(() => successMsg.remove(), 500);
    }, 3000);
    
    nama.value = '';
    pesan.value = '';
});

// Dark/Light Mode Toggle (opsional)
const themeToggle = document.createElement('div');
themeToggle.className = 'theme-toggle';
document.body.prepend(themeToggle);

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});