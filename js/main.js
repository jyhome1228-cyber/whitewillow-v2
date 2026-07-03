const header = document.getElementById("siteHeader");
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const revealItems = document.querySelectorAll(".js-reveal");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.classList.add("is-scrolled");
  } else {
    header.classList.remove("is-scrolled");
  }
});

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("is-active");
    mobileMenu.classList.toggle("is-open");
    document.body.classList.toggle("is-menu-open");
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuBtn.classList.remove("is-active");
      mobileMenu.classList.remove("is-open");
      document.body.classList.remove("is-menu-open");
    });
  });
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px"
  }
);

revealItems.forEach((item) => {
  revealObserver.observe(item);
});
