// const swiper = new Swiper('.swiper-wrapper', {
//     // Default parameters
//     slidesPerView: 2,
//     spaceBetween: 10,

//     breakpoints: {
//         // when window width is >= 320px
//         320: {
//             slidesPerView: 2,
//             spaceBetween: 20
//         },
//         // when window width is >= 480px
//         480: {
//             slidesPerView: 3,
//             spaceBetween: 30
//         },
//         // when window width is >= 640px
//         640: {
//             slidesPerView: 4,
//             spaceBetween: 40
//         }
//     }
// }) 

// var swiper = new Swiper(".myswiper", {
//     slidesPerView: 4,
//     // spaceBetween: 16,
//     // breakpoints: {
//     //     // when window width is >= 320px
//     //     320: {
//     //         slidesPerView: 2,
//     //         // spaceBetween: 20
//     //     },
//     //     // when window width is >= 480px
//     //     480: {
//     //         slidesPerView: 3,
//     //         // spaceBetween: 30
//     //     },
//     //     // when window width is >= 640px
//     //     640: {
//     //         slidesPerView: 4,
//     //         // spaceBetween: 40
//     //     }
//     // }
// }); 

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


// @media (min-width: 576px) { ... }

// // Medium devices (tablets, 768px and up)
// @media (min-width: 768px) { ... }

// // Large devices (desktops, 992px and up)
// @media (min-width: 992px) { ... }

// // X-Large devices (large desktops, 1200px and up)
// @media (min-width: 1200px) { ... }

// // XX-Large devices (larger desktops, 1400px and up)
// @media (min-width: 1400px) { ... } 


const hamburger = document.querySelector(".navbar_menu_hamburger");
const mobileContainer = document.querySelector('.mobile_container');
const mobileClose = document.querySelector(".mobile_close");
const mobileLinks = document.querySelector(".mobile_links");
const body = document.querySelector("body");

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