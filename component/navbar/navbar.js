document.addEventListener("DOMContentLoaded", () => {
  fetch("/component/navbar/navbar.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("navbar").innerHTML = html;

      const currentPath = window.location.pathname;
      document.querySelectorAll("#navbar .nav-link").forEach(link => {
        const linkPath = link.getAttribute("href");
        if (linkPath === currentPath) {
          link.classList.add("active");
          link.style.color = "var(--color-primary)";
        }
      });
    });
});