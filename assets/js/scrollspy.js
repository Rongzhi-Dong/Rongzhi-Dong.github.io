document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("div[id]");
  const navLinks = document.querySelectorAll(".greedy-nav a");

  function setActive() {
    let scrollPos = window.scrollY + 120;

    sections.forEach((section) => {
      const id = section.getAttribute("id");
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;

      if (scrollPos >= top && scrollPos < bottom) {
        navLinks.forEach((link) => link.classList.remove("active"));

        const activeLink = document.querySelector(`.greedy-nav a[href="/#${id}"]`);
        if (activeLink) activeLink.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", setActive);
});
