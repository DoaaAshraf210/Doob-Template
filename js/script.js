//-------------header , landing and about section ---------------
let links = document.querySelectorAll(
  `header .container > ul > li a ,
  header button,.landing .more :where(button,a),
  .about .container .row-1 .col:first-child button,
  footer .container ul li a`
);
links.forEach((link) =>
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(e.target.dataset.section).scrollIntoView({
      behavior: "smooth",
    });
  })
);
let toggleMenu = document.querySelector("header .container .toggle-menu");

function shapeOfToggleMenu() {
  if (toggleMenu.classList.contains("open")) {
    toggleMenu.children[0].style.cssText =
      "top: 0px; transform: rotate(45deg);";
    toggleMenu.children[1].style.cssText = " display: none;";
    toggleMenu.children[2].style.cssText =
      "top: 0px; transform: rotate(-45deg);";
    document.querySelector(" .landing .container .content").style.top =
      "calc(45% + 50px)";
  } else {
    toggleMenu.children[0].style.cssText = "top: 0px;";
    toggleMenu.children[1].style.cssText = "display: block;top: 10px;";
    toggleMenu.children[2].style.cssText = "top: 20px;";
    document.querySelector(" .landing .container .content").style.top = "30%";
  }
}

toggleMenu.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleMenu.classList.toggle("open");
  shapeOfToggleMenu();
});

// Click Anywhere Outside Menu And Toggle Button
document.addEventListener("click", (e) => {
  if (e.target !== toggleMenu) {
    if (toggleMenu.classList.contains("open")) {
      toggleMenu.classList.toggle("open");
      shapeOfToggleMenu();
    }
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    toggleMenu.classList.toggle("open");
    shapeOfToggleMenu();
  }
});

//------------------Portfolio----------------------------
let showMore = document.querySelector(".portfolio .container > a");
let content = document.querySelector(".portfolio .container > .content");
function showMoreOrLess(e) {
  e.preventDefault();
  showMore.classList.toggle("less");
  if (showMore.classList.contains("less")) {
    showMore.innerHTML = "Show Less.";
    for (let i = 3; i > 0; i--) {
      let figure = document.createElement("figure"),
        img = document.createElement("img"),
        caption = document.createElement("figcaption"),
        overlay = document.createElement("div");

      figure.className = "added";
      overlay.className = "overlay";
      img.src = `https://ivkovic.me/themes/doob/images/${i}.png`;
      caption.appendChild(document.createTextNode("Awesome Work"));
      figure.appendChild(overlay);
      figure.appendChild(img);
      figure.appendChild(caption);
      content.appendChild(figure);
    }
  } else {
    showMore.innerHTML = "Show More.";
    console.log(
      document
        .querySelectorAll(".portfolio .content .added")
        .forEach((figure) => figure.remove())
    );
  }
}
showMore.addEventListener("click", showMoreOrLess);
//----------------------- blog ---------------------
const swiper = new Swiper(".swiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  autoplay: {
    delay: 4000,
  },
});
