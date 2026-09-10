const track = document.querySelector(".gallery-track");
const wrapper = document.querySelector(".gallery-wrapper");
const prevBtn = document.querySelector(".gallery-btn.prev");
const nextBtn = document.querySelector(".gallery-btn.next");
const totalCards = document.querySelectorAll(".gallery-card").length;

let currentIndex = 0;
let autoplayTimer = null;

function getVisibleCount() {
  if (window.innerWidth >= 1024) return 3;
  if (window.innerWidth >= 600) return 2;
  return 1;
}

function getMaxIndex() {
  return totalCards - getVisibleCount();
}

function moveToIndex(index) {
  const pct = 100 / getVisibleCount();
  track.style.transform = `translateX(-${index * pct}%)`;
  currentIndex = index;
}

function goNext() {
  moveToIndex(currentIndex >= getMaxIndex() ? 0 : currentIndex + 1);
}

function goPrev() {
  moveToIndex(currentIndex <= 0 ? getMaxIndex() : currentIndex - 1);
}

function startAutoplay() {
  stopAutoplay();
  autoplayTimer = setInterval(goNext, 4000);
}

function stopAutoplay() {
  clearInterval(autoplayTimer);
}

nextBtn.addEventListener("click", () => {
  goNext();
  startAutoplay();
});
prevBtn.addEventListener("click", () => {
  goPrev();
  startAutoplay();
});

wrapper.addEventListener("mouseenter", stopAutoplay);
wrapper.addEventListener("mouseleave", startAutoplay);

window.addEventListener("resize", () => {
  const max = getMaxIndex();
  moveToIndex(currentIndex > max ? max : currentIndex);
});

startAutoplay();

document.querySelector("#footer-email").textContent =
  "📧 kolaopepo76@gmail.com";

