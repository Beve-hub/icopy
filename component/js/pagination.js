document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  const container = document.getElementById('testimonial-container');
  const dotContainer = document.getElementById('pagination-dots');
  let activeIndex = 0;

  cards.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.className = 'dot';
    dot.addEventListener('click', () => {
      cards[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    });
    dotContainer.appendChild(dot);
  });

  const dots = dotContainer.querySelectorAll('.dot');
  if (dots.length > 0) dots[0].classList.add('active');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const index = [...cards].indexOf(entry.target);
        if (index !== -1 && index !== activeIndex) {
          dots[activeIndex].classList.remove('active');
          dots[index].classList.add('active');
          activeIndex = index;
        }
      }
    });
  }, {
    root: container,
    threshold: 0.6
  });

  cards.forEach(card => observer.observe(card));
});