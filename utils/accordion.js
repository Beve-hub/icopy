

function createAccordion(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container with ID ${containerId} not found.`);
    return;
  }

  container.innerHTML = items.map((item, index) => `
    <div class="accordion-item">
      <h2 class="accordion-header" id="panelsStayOpen-heading${containerId}-${index}">
        <button 
          class="accordion-button ${index === 0 ? '' : 'collapsed'}" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#panelsStayOpen-collapse${containerId}-${index}" 
          aria-expanded="${index === 0 ? 'true' : 'false'}" 
          aria-controls="panelsStayOpen-collapse${containerId}-${index}"
        >
          ${item.title}
        </button>
      </h2>
      <div 
        id="panelsStayOpen-collapse${containerId}-${index}" 
        class="accordion-collapse collapse ${index === 0 ? 'show' : ''}" 
        aria-labelledby="panelsStayOpen-heading${containerId}-${index}"
      >
        <div class="accordion-body">
          ${item.content}
        </div>
      </div>
    </div>
  `).join('');
}