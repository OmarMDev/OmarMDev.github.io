import "./style.css";

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

// const activePage = () => {
//   navLinks.forEach((link) => {
//     link.classList.remove("active");
//   });
//   sections.forEach((section) => {
//     section.classList.remove("active");
//   });
// };

// navLinks.forEach((link, idx) => {
//   link.addEventListener("click", () => {
//     activePage();
//     link.classList.add("active");
//     sections[idx].classList.add("active");
//   });
// });

// logoLink.addEventListener("click", () => {
//   if (!navLinks[0].classList.contains("active")) {
//     activePage();

//     navLinks[0].classList.add("active");
//     sections[0].classList.add("active");
//   }
// });

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

const arrowRight = document.querySelector(".portfolio-box .navigation .arrow-right");
const arrowLeft = document.querySelector(".portfolio-box .navigation .arrow-left");

let index = 0;

const activePortfolio = () => {
  const imgSlide = document.querySelector(".portfolio-carousel .img-slide");
  const portfolioDetails = document.querySelectorAll(".portfolio-detail");

  imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;
  portfolioDetails.forEach((detail) => {
    detail.classList.remove("active");
  });
  portfolioDetails[index].classList.add("active");
};

arrowRight.addEventListener("click", () => {
  if (index < 1) {
    index++;
    arrowLeft.classList.remove("disabled");
    arrowRight.classList.add("disabled");

    // remember to adjust this when adding more templates by deleting the second line above
  } else {
    index = 1;
    arrowRight.classList.add("disabled");
  }

  activePortfolio();
});

arrowLeft.addEventListener("click", () => {
  if (index > 0) {
    index--;
    arrowRight.classList.remove("disabled");
    arrowLeft.classList.add("disabled");
  } else {
    index = 0;
    arrowLeft.classList.add("disabled");
  }

  activePortfolio();
});
