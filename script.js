const button = document.getElementById('sayHi');
const body = document.body;

button.addEventListener('click', function() {
    alert('Halo, selamat datang di website!');

    //warna background acak
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    body.style.backgroundColor = randomColor;
});

const form = document.getElementById('contactForm');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Terima kasih, ${name}! Pesan kamu udah terkirim.`);
        form.reset();
    } else {
        alert('Lengkapi semua kolom ya!');
    }
});

const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    //Simpan mode di local storage
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
});

//Cek apakah dark mode sebelum nya aktif
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

const scrollElements = document.querySelectorAll('.scroll-hidden');

const scrollAppear = () => {
    scrollElements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight / 1.3;

        if (elementTop < windowHeight) {
            el.classList.add('scroll-show');
        }
    });
};

window.addEventListener('scroll', scrollAppear);

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    setTimeout(() => {
        loader.classList.add("hidden");
    }, 1500);
});
