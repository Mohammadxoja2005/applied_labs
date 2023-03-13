var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 16,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: "auto",
            spaceBetween: 16
        },

        576: {
            slidesPerView: "auto",
            spaceBetween: 8
        },

        1: {
            slidesPerView: "auto",
            spaceBetween: 8
        }
    }
});
// taking loader
const loader = document.querySelector(".loader");
loader.classList.add('addStyleLoader')
// checking whether DOM is ready or not
if (document.readyState === "complete") {
    console.log('dom fully loaded')
} 
// if DOM is not loaded yet, loader will has class till DOM is loaded 
else if (document.readyState === "interactive") {
    console.log('some images and other stuff still loading');
}
else {
    window.addEventListener("DOMContentLoaded", () => {

        const hamburger = document.querySelector(".navbar_menu_hamburger");
        const mobileContainer = document.querySelector('.mobile_container');
        const mobileClose = document.querySelector(".mobile_close");
        const mobileLinks = document.querySelector(".mobile_links");
        const body = document.querySelector("body");

        body.style.display = "block";

        hamburger.addEventListener("click", () => {
            mobileContainer.style.left = "0";
            body.classList.add("stopScroll");
        })

        mobileClose.addEventListener("click", () => {
            mobileContainer.style.left = "-1000px";
            body.classList.remove("stopScroll");
        })

        mobileContainer.addEventListener("click", (e) => {
            if (!mobileLinks.contains(e.target)) {
                mobileContainer.style.left = "-1000px";
                body.classList.remove("stopScroll");
            }
        })
    });
    // Here below when DOM is fully loaded, making loader display none in order to show DOM
    window.addEventListener("load", () => {
        loader.style.display = "none";
    });
}