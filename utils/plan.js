import { planData } from './plan-data.js';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('card-container');
  if (!container) return;

  planData.forEach(plan => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <div class="d-flex gap-3 align-items-center justify-content-center" style="border-bottom: 0.5px solid #fff; padding:10px 0;">
        <img src="${plan.imgSrc}" alt="${plan.title}" style="width:2rem; height:2rem; "/>
        <div class="text-start">
          <span class="text-start">${plan.title}</span>
          <span >${plan.pack}</span>
        </div>
      </div>
      <div style="margin: 20px 0;">
       
      </div>
      <div >
      <p class="fs-6" style=" margin:10px 0; color:#D4FF27;">${plan.amount}</p>
        <div class="d-flex justify-content-between"><span class="text-start">Rate:</span> <span class="text-end">${plan.rate}</span>    </div>
          <div class="d-flex justify-content-between"><span class="text-start">Followers:</span>  <span class="text-end">${plan.follower}</span>  </div>
          <div class="d-flex justify-content-between"><span class="text-start">Minimum:</span>  <span class="text-end">${plan.minimum}</span>  </div>
        <button data-copy="${plan.amount}" style="background-color:#00000028; width:14rem; color:#fff; margin:10px 0 ;" >Copy</button>
      </div>
    `;

    container.appendChild(card);
  });

  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('copy-btn')) {
      const text = e.target.dataset.copy;
      navigator.clipboard.writeText(text).then(() => {
        alert(`Copied: ${text}`);
      });
    }
  });
});
