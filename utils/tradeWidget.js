// Helper to load TradingView widget script only once
function loadTradingViewScript(callback) {
  if (window.TradingView) {
    callback();
    return;
  }
  const script = document.createElement('script');
  script.src = 'https://s3.tradingview.com/tv.js';
  script.onload = callback;
  document.head.appendChild(script);
}


const widgetConfigs = {
  crypto: {
    container_id: "cryptoWidget",
    symbol: "BINANCE:BTCUSDT",
    interval: "60",
    theme: "dark",
    style: "1",
    locale: "en",
    width: "100%",
    height: 400,
  },
  forex: {
    container_id: "forexWidget",
    symbol: "FX:EURUSD",
    interval: "60",
    theme: "dark",
    style: "1",
    locale: "en",
    width: "100%",
    height: 400,
  },
  stocks: {
    container_id: "stocksWidget",
    symbol: "NASDAQ:AAPL",
    interval: "60",
    theme: "dark",
    style: "1",
    locale: "en",
    width: "100%",
    height: 400,
  }
};


function renderWidget(tab) {
  const config = widgetConfigs[tab];
 
  document.getElementById(config.container_id).innerHTML = "";
 
  new TradingView.widget(config);
}


loadTradingViewScript(() => renderWidget('crypto'));


document.getElementById('tradeTabs').addEventListener('click', (e) => {
  if (e.target && e.target.matches('button[data-bs-toggle="tab"]')) {
    const tabId = e.target.getAttribute('data-bs-target').replace('#', '');
    loadTradingViewScript(() => renderWidget(tabId));
  }
});