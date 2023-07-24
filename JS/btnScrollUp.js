const scrollButton = document.getElementById("scrollUp");

if (scrollButton) {
    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
        const threshold = 700;

        if (scrollPosition > threshold) {
            scrollButton.style.display = "flex";
        } else {
            scrollButton.style.display = "none";
        }
    }

    function topFunction() {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }

    scrollFunction();

    scrollButton.addEventListener("click", topFunction);
}
