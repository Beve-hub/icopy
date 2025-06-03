

// Dynamically inject CoinGecko script
const script = document.createElement("script");
script.src = "https://widgets.coingecko.com/gecko-coin-heatmap-widget.js";
script.onload = () => {
  
  const widget = document.createElement("gecko-coin-heatmap-widget");
  widget.setAttribute("locale", "en");
  widget.setAttribute("transparent-background", "true");
  widget.setAttribute("outlined", "false");
  widget.setAttribute("top", "100");

  document.getElementById("heatmap-widget-container").appendChild(widget);
};

document.body.appendChild(script);
