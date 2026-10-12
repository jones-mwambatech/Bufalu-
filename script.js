// BUFALU site scripts (vanilla JS)
// ---- CONFIG: change when client confirms the official WhatsApp number (international format, no + or spaces)
const WHATSAPP_NUMBER = "260965887084"; // Official Bufalu WhatsApp number (confirmed)
// Navbar opacity on scroll
const nav = document.querySelector('.nav-glass');
const onScroll = () => nav && nav.classList.toggle('scrolled', window.scrollY > 40);
onScroll(); window.addEventListener('scroll', onScroll, {passive:true});
// Scroll reveal
const els = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const io = new IntersectionObserver((es) => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), {threshold:.12});
  els.forEach(el => io.observe(el));
} else els.forEach(el => el.classList.add('in'));
// Product carousel (home)
if (document.querySelector('.product-swiper') && window.Swiper) {
  new Swiper('.product-swiper', {
    slidesPerView: 1.1, spaceBetween: 18, speed: 700,
    autoplay: {delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true},
    navigation: {nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'},
    breakpoints: {576: {slidesPerView: 1.6}, 768: {slidesPerView: 2.2}, 1200: {slidesPerView: 3}}
  });
}
// WhatsApp form
const form = document.getElementById('wa-form');
if (form) form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!form.checkValidity()) { form.classList.add('was-validated'); return; }
  const v = n => form.elements[n].value.trim();
  const msg = `New Website Enquiry\n\nName: ${v('name')}\nPhone: ${v('phone')}\nEmail: ${v('email') || 'Not provided'}\n\nMessage:\n${v('message')}`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
});
