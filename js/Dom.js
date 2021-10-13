class Dom {
  constructor(listHeader) {
    this.listHeader = listHeader;
  }
  scrollbar() {
    header.classList.toggle("sticky", window.scrollY > 400);
    scrollUp.classList.toggle("active", window.scrollY > 400);
  }
  moveToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  showNav() {
    this.listHeader.classList.add("active");
    document.body.backgroundColor = "rgba(0,0,0,.5)";
  }
  closeNav() {
    this.listHeader.classList.remove("active");
  }
}

class Loader {
  activateLoader() {
    pageLoader.style.display = "block";
    pageLoader.style.opacity = 1;
  }
  deactivateLoader() {
    setTimeout(() => {
      pageLoader.style.opacity = 0;
      pageLoader.addEventListener(
        "transitionend",
        () => {
          pageLoader.style.display = "none";
        },
        false
      );
    }, 1500);
  }
}


// variabels
const header = document.querySelector("header");
const scrollUp = document.querySelector(".scroll-up");
const listHeader = document.querySelector(".header-container header nav ul");
const btnShowNav = document.querySelector(".nav-toggle");
const btnCloseNav = document.querySelector(".nav-close");
const pageLoader = document.querySelector(".page-loader");

let scroll1 = window.pageYOffset;

const dom = new Dom(listHeader);
const loader = new Loader();

// events
const events = (() => {
  window.addEventListener("scroll", () => {
    dom.scrollbar();
    let scroll2 = window.pageYOffset;
    if (scroll1 > scroll2) {
      header.style.top = "0";
    } else {
      header.style.top = "-100px";
    }
    scroll1 = scroll2;
  });
  scrollUp.addEventListener("click", () => dom.moveToTop());
  btnShowNav.addEventListener("click", () => dom.showNav());
  btnCloseNav.addEventListener("click", () => dom.closeNav());
  window.addEventListener("beforeunload", loader.activateLoader);
  window.addEventListener("load", loader.deactivateLoader);
})()
