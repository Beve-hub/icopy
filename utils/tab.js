function renderTradingTabs(containerId, tabs) {
  const container = document.getElementById(containerId);

  const navTabs = tabs
    .map(
      (tab, index) => `
        <li class="nav-item" role="presentation">
          <button class="nav-link ${index === 0 ? "active" : ""}"
                  id="pills-${tab.id}-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-${tab.id}"
                  type="button"
                  role="tab"
                  aria-controls="pills-${tab.id}"
                  aria-selected="${index === 0 ? "true" : "false"}">
            ${tab.title}
          </button>
        </li>
      `
    )
    .join("");

  const tabContent = tabs
    .map(
      (tab, index) => `
        <div class="tab-pane fade ${index === 0 ? "show active" : ""}"
             id="pills-${tab.id}"
             role="tabpanel"
             aria-labelledby="pills-${tab.id}-tab">
          <div class="row align-items-center flex-column-reverse flex-md-row my-5">
            <div class="col-md-6 text-center ">
              <img src="${tab.image}"
                  
                   alt="${tab.alt}"
                   class="img-fluid mb-2"
                   style="position: relative; z-index: 1; display: block; width: auto; height: auto;" />
            </div>
            <div class="col-md-6 text-center text-md-start">
            <p class="fs-2 fw-bold lead" style="color: #D4FF27; " >${tab.label}</p>
             <div class="d-flex  gap-4 items-center "> <i class="bi bi-circle-fill  " style="color: var(--color-primary); font-size: 0.6rem;"></i>  <p class="text-start lead">${tab.point1} </p></div>
             <div class="d-flex  gap-4 items-center "> <i class="bi bi-circle-fill  " style="color: var(--color-primary); font-size: 0.6rem;"></i>  <p class="text-start lead">${tab.point2} </p></div>
             <div class="d-flex  gap-4 items-center "> <i class="bi bi-circle-fill  " style="color: var(--color-primary); font-size: 0.6rem;"></i>  <p class="text-start lead">${tab.point3} </p></div>
            </div>
          </div>
        </div>
      `
    )
    .join("");

  container.innerHTML = `
    <ul class="nav nav-pills mb-3 justify-content-center d-flex gap-3" id="pills-tab" role="tablist">
      ${navTabs}
    </ul>
    <div class="tab-content" id="pills-tabContent">
      ${tabContent}
    </div>
  `;
}
