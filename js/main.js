// ! Navbar Hamburger Menu
const hamburger = document.querySelector(".hamburgerBtn");
const navbarItem = document.querySelector(".navbarItem");

hamburger.addEventListener("click", () => {
  navbarItem.classList.toggle("navbarActive");

  if (navbarItem.classList.contains("navbarActive")) {
    hamburger.classList.add("hamburAnimated");
  } else {
    hamburger.classList.remove("hamburAnimated");
  }
});

// Video play
const videoOpen = document.querySelectorAll(".videoOpen");
const videoClose = document.getElementById("videoClose");
const video__popup = document.querySelector(".video__popup");
const video = video__popup.querySelector("video");

videoOpen.forEach(openV => {
  openV.addEventListener("click", () => {
    video__popup.style.display = "flex";
    video.src = openV.name;
    video.play();
  });
});

videoClose.addEventListener("click", () => {
  video__popup.style.display = "none";
  video.pause();
  video.src = "";
})

// ---------------
const launches__video = document.querySelectorAll(".launches__video");

launches__video.forEach(launch => {
  launch.children[0].addEventListener("click", () => {
    video__popup.style.display = "flex";
    video.src = launch.children[2].src;
    video.play();
  });
});

// Swiper
let serviceSwiper = new Swiper(".swiperService", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiperServiceNext",
    prevEl: ".swiperServicePrev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  }
});

let resourseSwiper = new Swiper(".swiperResourse", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiperResourseNext",
    prevEl: ".swiperResoursePrev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  }
});
