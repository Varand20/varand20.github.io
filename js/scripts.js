/**
 * File: js/scripts.js
 * Deskripsi: Berisi semua logika JavaScript untuk halaman portofolio utama.
 */

// Menjalankan skrip setelah seluruh konten halaman dimuat
document.addEventListener('DOMContentLoaded', function() {

    // ----------------------------------------
    // Inisialisasi Feather Icons
    // ----------------------------------------
    // Mengganti semua tag <i data-feather="..."> dengan ikon SVG.
    try {
        feather.replace();
    } catch (e) {
        console.error("Feather Icons failed to initialize.", e);
    }
    

    // ----------------------------------------
    // Logika Header Transparan saat di Atas
    // ----------------------------------------
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            // Menambahkan latar belakang pada header saat pengguna scroll ke bawah
            if (window.scrollY > 50) {
                header.classList.add('bg-slate-900/80', 'backdrop-blur-lg', 'shadow-lg');
            } else {
                header.classList.remove('bg-slate-900/80', 'backdrop-blur-lg', 'shadow-lg');
            }
        });
    }

    // ----------------------------------------
    // Logika untuk Menu Mobile
    // ----------------------------------------
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

    // Membuka menu mobile
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('hidden');
        });
    }

    // Menutup menu mobile dengan tombol close
    if (closeMenuBtn && mobileMenu) {
        closeMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    }
    
    // Menutup menu saat salah satu link navigasi di-klik
    if (mobileMenuLinks.length > 0 && mobileMenu) {
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // ----------------------------------------
    // Perbarui Tahun di Footer secara Dinamis
    // ----------------------------------------
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

});
