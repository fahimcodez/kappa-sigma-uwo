let isOpen = false;
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const contacts = document.querySelector(".nav-contacts");
const navLinks = document.querySelectorAll(".nav-links li");
const navContacts = document.querySelectorAll(".nav-contacts a");

function hideNav() {
  isOpen = !isOpen;
  nav.classList.add("nav-inactive");
  contacts.classList.add("nav-inactive");
  nav.classList.remove("nav-active");
  contacts.classList.remove("nav-active");
}

function showNav() {
  isOpen = !isOpen;
  nav.classList.add("nav-active");
  contacts.classList.add("nav-active");
  nav.classList.remove("nav-inactive");
  contacts.classList.remove("nav-inactive");
}

function animateNavItems() {
  // used to animate the link words
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      // eslint-disable-next-line no-param-reassign
      link.style.animation = "";
    } else {
      // eslint-disable-next-line no-param-reassign
      link.style.animation = `navLinkFade 0.4s ease forwards ${
        index / 5 + 0.2
      }s`;
    }
  });
  // used to animate the contact icons
  navContacts.forEach((contact, index) => {
    if (contact.style.animation) {
      // eslint-disable-next-line no-param-reassign
      contact.style.animation = "";
    } else {
      // eslint-disable-next-line no-param-reassign
      contact.style.animation = `navLinkFade 0.4s ease forwards ${
        index / 5 + 0.5
      }s`;
    }
  });
}

function toggleScreenSizes() {
  burger.addEventListener("click", () => {
    // cant use the toggle method because of ui conflict when resizing window manually
    if (isOpen) {
      hideNav();
    } else {
      showNav();
    }
    animateNavItems();
    burger.classList.toggle("toggle");
    document.body.style.overflow =
      document.body.style.overflow === "hidden" ? "visible" : "hidden";
  });

  // if hamburger menu is open and user resizes window, then add scroll ability
  window.addEventListener("resize", () => {
    if (window.innerWidth > 750) {
      document.body.style.overflow = "visible";
    }
  });

  // if window becomes mobile view then deal with scroll ability
  window.addEventListener("resize", () => {
    if (window.innerWidth < 750) {
      document.body.style.overflow = isOpen === true ? "hidden" : "visible";
    }
  });
}

const app = () => {
  toggleScreenSizes();
};

app();
