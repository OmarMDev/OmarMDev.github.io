import "./style.css";

import gsap from "gsap";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const navLinks = document.querySelectorAll("header nav a");
const logoLink = document.querySelector(".logo");
const sections = document.querySelectorAll("section");
const menuIcon = document.querySelector("#menu-icon");
const navBar = document.querySelector("header nav");
const navBarlinks = document.querySelectorAll("nav a");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  navBar.classList.toggle("active");
});

navBarlinks.forEach((link) => {
  link.addEventListener("click", () => {
    navBar.classList.toggle("active");
    menuIcon.classList.toggle("bx-x");
  });
});

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navBarlinks.forEach((links) => {
        links.classList.remove("active");
        document.querySelector(`header nav a[href*=${id}]`).classList.add("active");
      });
    }
  });
};

const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show-animate");
      } else {
        entry.target.classList.remove("show-animate");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

sections.forEach((el) => obs.observe(el));

const aboutmeBtns = document.querySelectorAll(".aboutme-btn");

aboutmeBtns.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    const aboutmeDetails = document.querySelectorAll(".aboutme-detail");
    aboutmeBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");

    aboutmeDetails.forEach((detail) => {
      detail.classList.remove("active");
    });

    aboutmeDetails[idx].classList.add("active");
  });
});
