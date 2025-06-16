
function renderTradingTabs(containerId, tabs) {
  const container = document.getElementById(containerId);

  const navTabs = tabs
    .map(
      (tab, index) => `
        <div class="nav-item" role="presentation">
          <button class="nav-index ${index === 0 ? "active" : ""}"
                  id="tab-${tab.id}-btn"
                  data-tab-id="${tab.id}"
                  type="button"
                  role="tab"
                  aria-controls="tab-${tab.id}"
                  aria-selected="${index === 0 ? "true" : "false"}">
            ${tab.title}
          </button>
        </div>
      `
    )
    .join("");

  const tabContent = tabs
    .map(
      (tab, index) => `
        <div class="tab-pane fade ${index === 0 ? "show active" : ""}"
             id="tab-${tab.id}"
             role="tabpanel"
             aria-labelledby="tab-${tab.id}-btn">
          <div class="row align-items-center flex-column-reverse flex-md-row my-5">
            <div class="col-md-6 text-center ">
              <img src="${tab.image}"
                   alt="${tab.alt}"
                   class="img-fluid mb-2"
                   style="position: relative; z-index: 1; display: block; width: auto; height: auto;" />
            </div>
            <div class="col-md-6 text-center text-md-start">
              <p class="fs-2 fw-bold lead" style="color: #D4FF27;">${tab.label}</p>
              <div class="d-flex gap-4 items-center">
                <i class="bi bi-circle-fill" style="color: var(--color-primary); font-size: 0.6rem;"></i>
                <p class="text-start lead">${tab.point1}</p>
              </div>
              <div class="d-flex gap-4 items-center">
                <i class="bi bi-circle-fill" style="color: var(--color-primary); font-size: 0.6rem;"></i>
                <p class="text-start lead">${tab.point2}</p>
              </div>
              <div class="d-flex gap-4 items-center">
                <i class="bi bi-circle-fill" style="color: var(--color-primary); font-size: 0.6rem;"></i>
                <p class="text-start lead">${tab.point3}</p>
              </div>
            </div>
          </div>
        </div>
      `
    )
    .join("");

  container.innerHTML = `
    <div class=" nav-pills mb-3 justify-content-center d-flex gap-3 tabs-scroll-wrapper" id="custom-tab-nav" role="tablist">
      ${navTabs}
    </div>
    <div class="tab-content" id="custom-tab-content">
      ${tabContent}
    </div>
  `;

  // Custom tab switching logic (replaces Bootstrap's data-bs-toggle)
  const buttons = container.querySelectorAll('[data-tab-id]');
  const panes = container.querySelectorAll('.tab-pane');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const tabId = button.getAttribute('data-tab-id');
      const targetPane = container.querySelector(`#tab-${tabId}`);

      buttons.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      });

      panes.forEach(pane => {
        pane.classList.remove('show', 'active');
      });

      button.classList.add('active');
      button.setAttribute('aria-selected', 'true');
      targetPane.classList.add('show', 'active');
    });
  });

  // Add scroll style for horizontal tab scrolling
  if (!document.getElementById('tabs-scroll-style')) {
    const style = document.createElement('style');
    style.id = 'tabs-scroll-style';
    style.textContent = `
     
        .nav-index{
          border: 1px solid white;
          color: white;
          background-color: transparent;
          transition: all 0.3s ease;
          margin: 20px 0px;
        }
          .nav-index.active {
          background-color: var(--color-primary);
          color: black;
          border: 1px solid var(--color-primary);}

          @media (max-width: 600px) {
          .nav-index {
            font-size: 0.7rem;
            width: 100px;
          }
           .tabs-scroll-wrapper {
          flex-wrap: wrap;
          justify-content: center;
        }
         
}
    `;
    document.head.appendChild(style);
  }
} // end renderTradingTabs
