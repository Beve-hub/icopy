export async function loadDashNav() {
  const container = document.getElementById("navbar");
  if (!container) return;

  const res = await fetch("/component/dashNav/dashNav.html");
  const html = await res.text();
  container.innerHTML = html;

  initDashNav();
  styleDashNav();
}

function initDashNav() {
  // Updated navItems array with Bootstrap icon classes
  const navItems = [
    { label: "Copy Trading", href: "/dashboard/Copy.html", iconClass: "bi bi-people" },
    { label: "Leverage", href: "/dashboard/leverage.html", iconClass: "bi bi-graph-up" },
    { label: "Mining", href: "/dashboard/mining.html", iconClass: "bi bi-cpu" },
    { label: "Deposit", href: "/dashboard/deposit.html", iconClass: "bi bi-box-arrow-in-down" },
    { label: "Withdrawals", href: "/dashboard/withdrawals.html", iconClass: "bi bi-box-arrow-up" },
    { label: "Referrals", href: "/dashboard/Referrals.html", iconClass: "bi bi-person-plus" },
    { label: "Pricing", href: "/dashboard/pricing.html", iconClass: "bi bi-currency-dollar" },
  ];

  // Render nav links with Bootstrap icons
  const renderLinks = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    navItems.forEach(({ label, href, iconClass }) => {
      const li = document.createElement("li");
      li.className = "nav-item";
      // Change: Add Bootstrap icon to nav link
      li.innerHTML = `
        <a class="nav-link px-3 py-1 d-flex align-items-center gap-2" href="${href}">
          <i class="${iconClass} nav-icon" style="color:var(--color-bg);"></i>
          ${label}
        </a>`;
      el.appendChild(li);
    });
  };

  renderLinks("desktopNavLinks");
  renderLinks("mobileNavLinks");

  const desktopLang = document.getElementById("languageSelect");
  const mobileLang = document.getElementById("languageSelectMobile");

  const sync = (from, to) => {
    from?.addEventListener("change", () => {
      if (to) to.value = from.value;
      localStorage.setItem("lang", from.value);
    });
  };

  sync(desktopLang, mobileLang);
  sync(mobileLang, desktopLang);

  const lang = localStorage.getItem("lang");
  if (lang) {
    if (desktopLang) desktopLang.value = lang;
    if (mobileLang) mobileLang.value = lang;
  }

  document.getElementById("logoutBtn")?.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Logging out...");
  });

  document.getElementById("logoutBtnMobile")?.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Logging out...");
  });

document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll("#notifTabs .nav-link");
  const panes = document.querySelectorAll(".notif-pane");

  tabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const target = tab.getAttribute("data-target");
      panes.forEach(pane => {
        pane.classList.toggle("d-none", pane.id !== target);
      });
    });
  });
});


  const currentPath = window.location.pathname;
  document.querySelectorAll(".nav-link").forEach((link) => {
    const icon = link.querySelector(".nav-icon");
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
      link.style.color = "var(--color-primary)"; 
      if (icon) {
        icon.style.color = "#000";
      }
    } else {
      link.style.color = ""; 
      if (icon) {
        icon.style.color = "#fff"; 
      }
    }
  });

  // Ensure mobile menu is hidden on large screens
  const navbarCollapse = document.querySelector("#navbarContent");
  const navbarToggler = document.querySelector(".navbar-toggler");
  if (window.innerWidth >= 992) {
    navbarCollapse?.classList.remove("show");
    navbarCollapse?.setAttribute("style", "display: none !important;");
    navbarToggler?.setAttribute("aria-expanded", "false");
  }
}

function styleDashNav() {
  const nav = document.querySelector("nav.navbar");
  if (!nav) return;

  nav.style.display = "flex";
  nav.style.flexDirection = "column";

  const firstLayer = nav.querySelector(".container-fluid.border-bottom");
  const secondLayer = nav.querySelector(".container-fluid.d-none.d-lg-block");

  if (firstLayer) {
    firstLayer.style.borderBottom = "1px solid var(--color-border-light, #e0e0e0)";
    firstLayer.style.backgroundColor = "var(--color-back, #fff)";
    firstLayer.style.zIndex = "1020";
  }

  if (secondLayer) {
    secondLayer.style.backgroundColor = "var(--color-back, #f8f9fa)";
    secondLayer.style.borderTop = "1px solid var(--color-border-light, #e0e0e0)";
    secondLayer.style.boxShadow = "0 1px 2px rgba(0, 0, 0, 0.05)";
    // Remove border from desktop nav links
    const desktopNavLinks = secondLayer.querySelectorAll("#desktopNavLinks .nav-link");
    desktopNavLinks.forEach((link) => {
      link.style.border = "none";
    });
  }

  // Style Bootstrap icons in nav links
  document.querySelectorAll(".nav-icon").forEach((icon) => {
    icon.style.fontSize = "1.2rem";
    icon.style.marginRight = "8px";
    icon.style.verticalAlign = "middle";
  });

  // Style language selects: transparent background, white border, white text
  const langSelects = [
    document.getElementById("languageSelect"),
    document.getElementById("languageSelectMobile"),
  ];
  langSelects.forEach((select) => {
    if (select) {
      select.style.background = "transparent";
      select.style.border = "1px solid #fff";
      select.style.color = "#fff";
      select.style.boxShadow = "none";
    }
  });

  // Style dropdown toggles and menus: transparent background, white text
  document.querySelectorAll('.dropdown-toggle').forEach((toggle) => {
    toggle.style.background = "transparent";
    toggle.style.color = "#fff";
    toggle.style.border = "none";
  });
  document.querySelectorAll('.dropdown-menu').forEach((menu) => {
    menu.style.background = "#fff";
    menu.style.color = "#121212";
    menu.style.border = "none";
    // Style dropdown items
    menu.querySelectorAll('.dropdown-item').forEach((item) => {
      item.style.background = "#fff";
      item.style.color = "#121212";
    });
  });

  // Reinforce hiding mobile menu on large screens
  const navbarCollapse = nav.querySelector("#navbarContent");
  if (navbarCollapse && window.innerWidth >= 992) {
    navbarCollapse.style.display = "none !important";
    navbarCollapse.classList.remove("show");
  }
}

// Handle window resize to ensure mobile menu stays hidden on large screens
window.addEventListener("resize", () => {
  const navbarCollapse = document.querySelector("#navbarContent");
  const navbarToggler = document.querySelector(".navbar-toggler");
  if (navbarCollapse && window.innerWidth >= 992) {
    navbarCollapse.classList.remove("show");
    navbarCollapse.style.display = "none !important";
    navbarToggler?.setAttribute("aria-expanded", "false");
  } else if (navbarCollapse && window.innerWidth < 992) {
    navbarCollapse.style.display = "";
  }
});

document.addEventListener("DOMContentLoaded", loadDashNav);