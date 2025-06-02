const cardWrapper = document.querySelector('.staff-cards');
const cards = document.querySelectorAll('.staff-card');
const cardWidth = cards[0].offsetWidth + 16; // width + margem
const visibleCards = 3;
let scrollIndex = 0;

document.querySelector('.scroll-btn.right').addEventListener('click', () => {
const maxIndex = cards.length - visibleCards;
if (scrollIndex < maxIndex) {
    scrollIndex++;
    cardWrapper.style.transform = `translateX(-${scrollIndex * cardWidth}px)`;
}
});

document.querySelector('.scroll-btn.left').addEventListener('click', () => {
if (scrollIndex > 0) {
    scrollIndex--;
    cardWrapper.style.transform = `translateX(-${scrollIndex * cardWidth}px)`;
}
});