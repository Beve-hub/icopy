document.addEventListener("DOMContentLoaded", function () {
  const footerMount = document.querySelector("#footer");
  if (footerMount) {
    fetch("/component/footer/footer.html")
      .then(response => response.text())
      .then(html => {
        footerMount.innerHTML = html;
      })
      .catch(err => console.error("Footer load error:", err));
  }
});