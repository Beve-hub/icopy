// accordion.js
function createAccordion(containerId, items, maxItems) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = '';

  const limitedItems = maxItems ? items.slice(0, maxItems) : items;

  limitedItems.forEach((item, index) => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'accordion-item';

    const header = document.createElement('div');
    header.className = 'accordion-header';
    header.setAttribute('data-index', index);

    const icon = document.createElement('span');
    icon.className = 'accordion-icon bi bi-plus';

    const title = document.createElement('span');
    title.className = 'accordion-title';
    title.textContent = item.title;

    const body = document.createElement('div');
    body.className = 'accordion-body';
    body.innerHTML = item.content;

    header.appendChild(title);
    header.appendChild(icon);
    itemDiv.appendChild(header);
    itemDiv.appendChild(body);
    container.appendChild(itemDiv);

    header.addEventListener('click', function () {
      const isOpen = body.classList.toggle('open');
      icon.className = isOpen ? 'accordion-icon bi bi-dash' : 'accordion-icon bi bi-plus';
      title.classList.toggle('open', isOpen); 
    });
  });
}

 
document.addEventListener('DOMContentLoaded', function () {
  const accorions = document.querySelectorAll('.accordion[data-count]');
  accordions.forEach(container => {
    const count = parseInt(container.getAttribute('data-count'), 10) || 0;
    createAccordion(container.id, accordionItems, count);
  });
});
