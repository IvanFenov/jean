const carouselContainer = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

let currentIndex = 0;

function updateCarousel() {
    const offset = -currentIndex * 100; // Зміщення на ширину слайда
    carouselContainer.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
});











// Отримання імені з localStorage
const firstName = localStorage.getItem('firstName');
const welcomeMessage = document.getElementById('welcome-message');

// Відображення вітання
if (firstName) {
    welcomeMessage.textContent = `Вітаємо, ${firstName}!`;
} else {
    welcomeMessage.textContent = 'Вітаємо!';
}
;















const paymentForm = document.getElementById('paymentForm');
const statusMessage = document.getElementById('statusMessage');

paymentForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const cardName = document.getElementById('cardName').value.trim();
    const cardNumber = document.getElementById('cardNumber').value.trim();
    const expiryDate = document.getElementById('expiryDate').value.trim();
    const cvv = document.getElementById('cvv').value.trim();

    // Простий алгоритм перевірки введених даних
    if (!cardNumber.match(/^\d{16}$/)) {
        statusMessage.textContent = 'Номер картки має містити 16 цифр!';
        statusMessage.style.color = 'red';
        return;
    }

    if (!expiryDate.match(/^(0[1-9]|1[0-2])\/\d{2}$/)) {
        statusMessage.textContent = 'Некоректний формат терміну дії (MM/YY)!';
        statusMessage.style.color = 'red';
        return;
    }

    if (!cvv.match(/^\d{3}$/)) {
        statusMessage.textContent = 'CVV має містити 3 цифри!';
        statusMessage.style.color = 'red';
        return;
    }

    // Симуляція успішної оплати
    statusMessage.textContent = 'Оплата успішно виконана!';
    statusMessage.style.color = 'green';

    // Очистити форму
    paymentForm.reset();
});















