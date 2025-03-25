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

// Login Function
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "admin" && password === "1234") {
        alert("Login sukses! Selamat datang, " + username);

        document.getElementById('login-container').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
    } else {
        document.getElementById('login-status').innerText = "Username atau password salah!";
    }
}

//Logout Funtion
function logout() {
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
}

//API Weather Function
function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = "7d0e8adeb197959c29879548665c91b9"; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = `Suhu di ${city}: ${data.main.temp}°C, ${data.weather[0].description}`;
            document.getElementById('weather-info').innerText = weatherInfo;
        })
        .catch(error => {
            document.getElementById('weather-info').innerText = "Kota tidak ditemukan!";
        });
}

function login () {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        window.location.href = "home.html";
    } else {
        alert("Username atau password salah!")
    }
}

// Simpan data profile ke local storage
function saveProfile() {
    const newUsername = document.getElementById('new-username').value;
    const fileInput = document.getElementById('upload-pic');
    const profilePic = document.getElementById('profile-pic');

    if (newUsername) {
        localStorage.setItem('username', newUsername);
        document.getElementById('username-display').textContent = `Username: $(newUsername)`;      
    }

    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            profilePic.src = e.target.result;
            localStorage.setItem('profilePic', e.target.result);
        };
        reader.readAsDataURL(fileInput.files[0]);
    }

    alert('Profile berhasil diperbarui!');
}

// Cek kalau ada data tersimpan
window.onload = function () {
    const savedUsername = localStorage.getItem('username');
    const savedProfilePic = localStorage.getItem('profilePic');

    if (savedUsername) {
        document.getElementById('username-display').textContent = `Username: ${savedUsername}`;
    }

    if (savedProfilePic) {
        document.getElementById('profile-pic').src = savedProfilePic;
    }
}
