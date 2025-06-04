document.addEventListener("DOMContentLoaded", () => {
  const frames = document.querySelectorAll(".image-frame");

  frames.forEach((frame) => {
    frame.addEventListener("click", () => {
      frames.forEach((f) => f.classList.remove("active"));
      frame.classList.add("active");
    });
  });

  // Set initial active frame
  frames[0].classList.add("active");
});
