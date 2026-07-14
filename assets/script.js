/* ============================================================
   DEALER LEAPMOTOR JAKARTA — GLOBAL SCRIPT
   ============================================================ */

const WA_NUMBER = '6281382443832'; // <- ganti di sini kalau nomor sales berubah

/* ---------- Navbar: solid saat scroll ---------- */
const nav = document.getElementById('nav');
if (nav && !nav.classList.contains('nav--solid')) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  });
}

/* ---------- Burger menu (mobile) ---------- */
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
if (burger && menu) {
  burger.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    burger.innerHTML = open
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-bars"></i>';
    burger.setAttribute('aria-expanded', open);
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    menu.classList.remove('open');
    burger.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }));
}

/* ---------- FAQ accordion ---------- */
document.querySelectorAll('.faq__q').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.closest('.faq__item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq__item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

/* ---------- Form konsultasi -> WhatsApp ---------- */
const form = document.getElementById('waForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();

    const nama    = document.getElementById('f-nama').value.trim();
    const telepon = document.getElementById('f-telepon').value.trim();
    const model   = document.getElementById('f-model').value;
    const tanggal = document.getElementById('f-tanggal').value;
    const pesan   = document.getElementById('f-pesan').value.trim();

    if (!nama || !telepon) {
      alert('Nama dan nomor telepon wajib diisi.');
      return;
    }

    const lines = [
      'Halo, saya mau konsultasi Leapmotor.',
      '',
      `Nama: ${nama}`,
      `No. HP: ${telepon}`,
      `Model diminati: ${model}`,
    ];
    if (tanggal) lines.push(`Rencana test drive: ${tanggal}`);
    if (pesan)   lines.push(`Pertanyaan: ${pesan}`);

    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank');
  });
}
