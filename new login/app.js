var loader = document.getElementById("loader");

window.addEventListener("load", () => {
    setTimeout(() => {
        loader.style.display = "none";
    }, 1500);
});

const loginForm = document.querySelector('form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    loader.style.display = "block"; // Show loader

    setTimeout(() => {
        if (username === 'admin' && password === '123') {
            window.location.href = '../UserInfo/index.html';
        } else {
            loader.style.display = "none"; // Hide loader on error
            alert('Invalid Credentials');
        }
    }, 2000);
});