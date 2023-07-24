const prev = document.getElementById("prev");
const next = document.getElementById("next");
const thumbnail = document.getElementsByClassName("thumbnail");
const hero = document.getElementById("hero");
const backgroundImg = ["/images/bg-main.jpg", "images/bg-main2.jpg", "/images/bg-main3.jpg", "images/bg-main4.jpg", "images/bg-main6.jpg"];

let i = 0;
let intervalTime = 4500;
let interval;

function switchToNext() {
    if (i < backgroundImg.length - 1) {
        i++;
    } else {
        i = 0;
    }

    updateHeroImage(i);
    updateThumbnail(i);
}

function switchToPrev() {
    if (i > 0) {
        i--;
    } else {
        i = backgroundImg.length - 1;
    }

    updateHeroImage(i);
    updateThumbnail(i);
}

function updateHeroImage(index) {
    hero.style.backgroundImage = `url("${backgroundImg[index]}")`;
}

function updateThumbnail(index) {
    Array.from(thumbnail).forEach((thumb, idx) => {
        if (idx === index) {
            thumb.classList.add("active");
        } else {
            thumb.classList.remove("active");
        }
    });
}

function startAutoplay() {
    interval = setInterval(switchToNext, intervalTime);
}

function stopAutoplay() {
    clearInterval(interval);
}

next.onclick = function () {
    switchToNext();
    stopAutoplay();
};

prev.onclick = function () {
    switchToPrev();
    stopAutoplay();
};

startAutoplay();

hero.addEventListener("mouseenter", function () {
    stopAutoplay();
});

hero.addEventListener("mouseleave", function () {
    startAutoplay();
});
