export function createLineChart({
  id,
  width = 200,
  height = 70,
  data = [],
  borderColor = 'rgba(0, 200, 83, 1)',
  pointColor = 'rgba(0, 200, 83, 1)',
  label = '',
  showXAxis = false,
  showYAxis = false
}) {
  const canvas = document.getElementById(id);
  if (!canvas) return;
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['March', 'April', 'May', 'June'],
      datasets: [{
        label: label,
        data: data,
        borderColor: borderColor,
        backgroundColor: 'rgba(0,0,0,0)',
        tension: 0.2,
        fill: false,
        pointRadius: 4,
        pointBackgroundColor: pointColor
      }]
    },
    options: {
      responsive: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        y: { display: showYAxis },
        x: {
          display: showXAxis,
          grid: {
            display: showXAxis,
            drawBorder: showXAxis,
            drawOnChartArea: false
          }
        }
      }
    }
  });
}

export function enableCopyButtons() {
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('copy-btn')) {
      const text = e.target.dataset.copy;
      navigator.clipboard.writeText(text).then(() => {
        alert(`Copied: ${text}`);
      });
    }
  });
}