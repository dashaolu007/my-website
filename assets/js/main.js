
const header = document.querySelector('.header');
const toggle = document.querySelector('.mobile-toggle');
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = header.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

const inquiryEmail = 'ashaolu@medivosolutions.com';
const futureLinks = document.querySelectorAll('[data-talk-future]');
futureLinks.forEach(link => {
  const subject = encodeURIComponent(link.dataset.subject || 'Talk About the Future - Medivo Inquiry');
  const body = encodeURIComponent(link.dataset.body || 'Hello Medivo team,%0D%0A%0D%0AI would like to talk about the future with Medivo.%0D%0A%0D%0AName:%0D%0AOrganization:%0D%0APhone:%0D%0AMessage:');
  link.setAttribute('href', `mailto:${inquiryEmail}?subject=${subject}&body=${body}`);
});

const form = document.querySelector('[data-contact-form]');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent(`Talk About the Future - ${data.get('inquiry') || 'Medivo Inquiry'}`);
    const body = encodeURIComponent(
      `Hello Medivo team,\n\n` +
      `I would like to talk about the future with Medivo.\n\n` +
      `Name: ${data.get('name') || ''}\n` +
      `Email: ${data.get('email') || ''}\n` +
      `Phone: ${data.get('phone') || ''}\n` +
      `Organization: ${data.get('organization') || ''}\n` +
      `Inquiry Type: ${data.get('inquiry') || ''}\n\n` +
      `Message:\n${data.get('message') || ''}`
    );
    window.location.href = `mailto:${inquiryEmail}?subject=${subject}&body=${body}`;
    const status = form.querySelector('[data-form-status]');
    if(status) status.textContent = 'Your email client should open with the request addressed to ashaolu@medivosolutions.com.';
  });
}
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
