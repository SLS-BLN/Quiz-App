function navigation() {
  const pages = document.querySelectorAll('.page');
  const navLinks = document.querySelectorAll('[data-js=nav-link]');
  const headline = document.querySelector('[data-js=headline]');
  
  const navIcons = document.querySelectorAll(".icon__nav");

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

        navIcons.forEach(navIcon => {
          navIcon.classList.remove("icon--focus");
        });
        const selectedIcon = document.querySelector(
          `[data-ic=${navLink.dataset.link}]`
          );
        selectedIcon.classList.add("icon--focus")


      });
    
  });
}

export { navigation };

