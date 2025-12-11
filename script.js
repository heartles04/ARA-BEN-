const textToType = "BELKİDE ŞARJIN BİTTİ YADA BİZ BİTTİK ARA BENİ LÜTFEN";
const typingElement = document.getElementById('typing-text');
const cursorElement = document.querySelector('.cursor'); // İmleç elementini de çekelim

let index = 0;

function typeWriter() {
    if (index < textToType.length) {
        typingElement.textContent += textToType.charAt(index);
        index++;
        // Her harf arasında 75 milisaniye bekle
        setTimeout(typeWriter, 75); 
    } else {
        // Yazma bittiğinde imleci durdurabiliriz
        if (cursorElement) {
             cursorElement.style.animation = 'none';
             cursorElement.style.visibility = 'hidden';
        }
    }
}

// Tüm HTML yüklendikten sonra animasyonu başlat
window.onload = typeWriter;

// VEYA daha modern bir yaklaşım:
// document.addEventListener('DOMContentLoaded', typeWriter);
