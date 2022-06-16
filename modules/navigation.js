function navigation() {
  const pages = document.querySelectorAll('.page');
  const navLinks = document.querySelectorAll('[data-js=nav-link]');
  const headline = document.querySelector('[data-js=headline]');
  
  navLinks.forEach(navLink => {
    navLink.addEventListener('click', () => {
      const selectedPage = document.querySelector(
        `[data-js=${navLink.dataset.link}]`
        );
      pages.forEach(page => {
        page.classList.remove('current');
      });
      selectedPage.classList.add('current');
      headline.textContent = navLink.dataset.headline;      
    });
    console.log(navLink);
    
  });
}

export { navigation };

