let lastScrollTop = 0;
window.addEventListener("scroll", function() {
    let temp = document.getElementById("search");
    let currentScroll = window.scrollY;
    if (currentScroll > lastScrollTop) {
        temp.style.width = "50%";
    } 
    else {
        temp.style.width = "60%";
    }
    lastScrollTop = currentScroll;
});


function scrollImagesleft(ig) {
    document.getElementById(ig).scrollBy({ left: -200, behavior: "smooth" });
};

function scrollImagesright(ig) {
    document.getElementById(ig).scrollBy({ left: 200, behavior: "smooth" });
};