function toggleCardBookmark() {
  const bookmarks = document.querySelectorAll(".question-card--icon");
  bookmarks.forEach((bookmark) => {
    bookmark.addEventListener("click", function () {
      bookmark.classList.toggle("icon--focus");
    });
  });
}

export { toggleCardBookmark };
