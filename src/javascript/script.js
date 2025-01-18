// Tema değiştirme işlevi
function toggleTheme() {
    document.body.classList.toggle('theme-light');
    document.body.classList.toggle('theme-dark');
}

// Scroll animasyonu için
window.addEventListener('scroll', function () {
    document.querySelectorAll('.animate-on-scroll').forEach(function (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            element.classList.add('visible');
        }
    });
});

// Proje filtreleme işlevi
function filterProjects(category) {
    const projects = document.querySelectorAll('.project-item');
    projects.forEach(function (project) {
        if (category === 'all' || project.classList.contains(category)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

// Başarı mesajı gösterme işlevi
function displaySuccessMessage() {
    const successMessage = document.getElementById("successMessage");
    successMessage.style.display = "block";
    successMessage.classList.add('fade-in'); // Yumuşak animasyon
    setTimeout(() => {
        successMessage.style.display = "none";
    }, 3000); // 3 saniye sonra otomatik olarak gizle
    return false;
}

// Çağrı fonksiyonu
function callNow(phoneNumber) {
    window.location.href = `tel:${phoneNumber}`; // Dinamik telefon numarası
}

// Tüm "ara" butonlarına tıklama işlevi ekle
document.querySelectorAll('.call-button').forEach(button => {
    button.addEventListener('click', function () {
        const phoneNumber = this.getAttribute('data-phone'); // "data-phone" içindeki numarayı al
        callNow(phoneNumber);
    });
});

// Modal işlevi: Resimleri tam ekran görüntüleme
document.querySelectorAll('.project-image').forEach(image => {
    image.addEventListener('click', () => {
        const modal = document.getElementById("image-modal");
        const modalImage = document.getElementById("modal-image");
        modal.style.display = "flex";
        modalImage.src = image.src; // Resim kaynağını modal içine yükle
    });
});

// Modal kapatma işlevi
const closeModal = document.querySelector(".close-modal");
closeModal.addEventListener('click', () => {
    document.getElementById("image-modal").style.display = "none";
});

// Modal dışına tıklama ile kapatma
const modal = document.getElementById("image-modal");
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
