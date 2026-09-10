document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) lucide.createIcons();

  const menuButton = document.querySelector('.menu-button');
  const mobileNav = document.querySelector('.mobile-nav');
  if (menuButton && mobileNav) {
    menuButton.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.innerHTML = `<i data-lucide="${isOpen ? 'x' : 'menu'}"></i>`;
      lucide.createIcons();
    });

    mobileNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('is-open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.innerHTML = '<i data-lucide="menu"></i>';
        lucide.createIcons();
      });
    });
  }

  const form = document.querySelector('#contact-form');
  const status = document.querySelector('.form-status');
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = form.elements.name.value.trim();
    status.textContent = `Thank you${name ? `, ${name}` : ''}. An advisor will be in touch shortly.`;
    form.reset();
  });
});
