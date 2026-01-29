// Fungsi pencarian tabel
function filterTable() {
    const input = document.getElementById('search');
    const filter = input.value.toLowerCase();
    const table = document.getElementById('items-table');
    const rows = table.getElementsByTagName('tr');
    
    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        let match = false;
        for (let j = 0; j < cells.length; j++) {
            if (cells[j].textContent.toLowerCase().includes(filter)) {
                match = true;
                break;
            }
        }
        rows[i].style.display = match ? '' : 'none';
    }
}

// Validasi form
function validateForm() {
    const email = document.getElementById('email').value;
    const item = document.getElementById('item').value;
    if (!email.includes('@') || item === '') {
        alert('Harap isi email yang valid dan nama item!');
        return false;
    }
    alert('Laporan berhasil dikirim!');
    return true;
}

// Slideshow galeri
let slideIndex = 0;
function showSlides() {
    const slides = document.getElementsByClassName('slide');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000); // Ganti slide setiap 3 detik
}
window.onload = showSlides;