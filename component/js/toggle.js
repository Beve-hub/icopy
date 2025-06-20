document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("advanced-toggle");
  const content = document.getElementById("advanced-content");
  const icon = document.getElementById("toggle-icon");

  toggle.addEventListener("click", function () {
    const isVisible = content.style.display !== "none";
    content.style.display = isVisible ? "none" : "block";
    icon.className = isVisible ? "bi bi-chevron-up" : "bi bi-chevron-down";
  });
});
