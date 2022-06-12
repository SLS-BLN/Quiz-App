// Navigation Module

// 2. on click highlight icon (home, bookmark, create, profile)
// - add class "icon--focus" to navbar-icon
// - remove class "icon--focus" from all other navbar-icons

function navigation() {
  const linkHome = document.querySelector("[data-js=link-home]");
  const linkBookmarked = document.querySelector("[data-js=link-bookmark]");
  const linkCreate = document.querySelector("[data-js=link-create]");
  const linkProfile = document.querySelector("[data-js=link-profile]");

  const pageHome = document.querySelector("[data-js=home]");
  const pageBookmarked = document.querySelector("[data-js=bookmark]");
  const pageCreate = document.querySelector("[data-js=create]");
  const pageProfile = document.querySelector("[data-js=profile]");

  linkHome.addEventListener("click", () => {
    pageHome.classList.add("current");
    pageBookmarked.classList.remove("current");
    pageCreate.classList.remove("current");
    pageProfile.classList.remove("current");
  });

  linkBookmarked.addEventListener("click", () => {
    pageHome.classList.remove("current");
    pageBookmarked.classList.add("current");
    pageCreate.classList.remove("current");
    pageProfile.classList.remove("current");
    // test fill
    // linkBookmarked.classList.add("icon--focus");
  });

  linkCreate.addEventListener("click", () => {
    pageHome.classList.remove("current");
    pageBookmarked.classList.remove("current");
    pageCreate.classList.add("current");
    pageProfile.classList.remove("current");
  });

  linkProfile.addEventListener("click", () => {
    pageHome.classList.remove("current");
    pageBookmarked.classList.remove("current");
    pageCreate.classList.remove("current");
    pageProfile.classList.add("current");
  });
}

export { navigation };
