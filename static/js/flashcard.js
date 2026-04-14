// flashcard.js — 處理 flashcard 翻轉，單一功能

document.querySelectorAll(".flashcard").forEach(function (card) {
  function toggle() {
    card.classList.toggle("flipped");
  }

  card.addEventListener("click", toggle);

  card.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  });
});
