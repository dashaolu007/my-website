
const header = document.querySelector('.header');
const toggle = document.querySelector('.mobile-toggle');

if (toggle) {
  toggle.addEventListener('click', () => {
    const isOpen = header.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
}

const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();

document.querySelectorAll('[data-demo-form]').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const status = form.querySelector('[data-form-status]');
    if (status) {
      status.textContent = 'Thank you. Your request has been captured for the Medivo team.';
      status.style.color = '#00897f';
      status.style.fontWeight = '800';
    }
    form.reset();
  });
});
