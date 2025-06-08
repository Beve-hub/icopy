const coins = [
  { name: 'Bitcoin', symbol: 'BTC', img: '/assets/bitcoin-icon.png' },
  { name: 'Ethereum', symbol: 'ETH', img: '/assets/eth-icon.png' },
  { name: 'BNB', symbol: 'BNB', img: '/assets/BNB-icon.png' }
];

window.setupCoinSelect = function(displayId, btnsContainerId, options = {}) {
  const display = document.getElementById(displayId);
  const btnsContainer = document.getElementById(btnsContainerId);

  if (!display || !btnsContainer) return;

  // Use width from options or default to 'auto'
  const width = options.width ? `width:${options.width};` : '';

  // Initial display
  display.innerHTML = `
    <div class="d-flex align-items-center" style="border:1.5px solid var(--color-text); border-radius:6px; min-height:42px; padding:4px 12px; background:transparent;${width}">
      <span style="color:#888;">Select coin</span>
    </div>
  `;

  btnsContainer.innerHTML = coins.map((coin, i) => `
    <button type="button" class="btn btn-outline-light d-flex align-items-center mb-2 me-2 coin-btn" data-idx="${i}">
      <img src="${coin.img}" alt="${coin.name}" style="width:24px;height:24px;margin-right:8px;">
      <span>${coin.name}</span>
    </button>
  `).join('');

  btnsContainer.querySelectorAll('.coin-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const idx = this.getAttribute('data-idx');
      const coin = coins[idx];
      display.innerHTML = `
        <div class="d-flex align-items-center" style="border:1.5px solid var(--color-text); border-radius:6px; min-height:42px; padding:4px 12px; background:transparent;${width}">
          <img src="${coin.img}" alt="${coin.name}" style="width:24px;height:24px;margin-right:8px;">
          <span style="color:var(--color-text);font-weight:500;">${coin.name}</span>
        </div>
      `;
    });
  });

  
};