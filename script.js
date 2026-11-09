document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('navToggle');
const header = document.querySelector('.site-header');
navToggle.addEventListener('click', () => header.classList.toggle('open'));

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => header.classList.remove('open'));
});

const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = new FormData(form);
  const jmeno = data.get('jmeno');
  const prijmeni = data.get('prijmeni');
  const email = data.get('email');
  const misto = data.get('misto');
  const typy = data.getAll('typ').join(', ');
  const zprava = data.get('zprava');

  const subject = encodeURIComponent(`Poptávka z webu – ${jmeno} ${prijmeni}`);
  const body = encodeURIComponent(
    `Jméno: ${jmeno} ${prijmeni}\n` +
    `Email: ${email}\n` +
    `Místo stavby: ${misto || '-'}\n` +
    `Typ: ${typy || '-'}\n\n` +
    `Zpráva:\n${zprava}`
  );

  window.location.href = `mailto:mgobklady@gmail.com?subject=${subject}&body=${body}`;

  document.getElementById('formSuccess').hidden = false;
  form.reset();
});
