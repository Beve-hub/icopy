document.addEventListener('DOMContentLoaded', () => {
  const bars = document.querySelectorAll('.progress-bar');

  bars.forEach(bar => {
    const percent = bar.getAttribute('data-percent') || '0';
    const width = bar.getAttribute('data-width') || '100%';
    const color = bar.getAttribute('data-color') || '#2196f3';

    bar.style.width = width;

    const fill = document.createElement('div');
    fill.classList.add('progress-bar-fill');
    fill.style.width = `${percent}%`;
    fill.style.backgroundColor = color;

    bar.appendChild(fill);
  });
});
