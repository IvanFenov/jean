const form = document.getElementById('registrationForm');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const password = document.getElementById('password').value;

    // Перевірка пароля
    if (password.length < 6) {
        errorMessage.textContent = 'Пароль має містити щонайменше 6 символів!';
        return;
    }

    // Збереження даних у localStorage
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);

    // Перенаправлення на головну сторінку
    window.location.href = 'index.html';
});
