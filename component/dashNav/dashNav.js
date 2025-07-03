function showMobileView(view) {
  document.getElementById('mobileMainMenu').classList.add('d-none');
  document.getElementById('mobileBalanceMenu').classList.add('d-none');
  document.getElementById('mobileNotificationMenu').classList.add('d-none');

  if (view === 'balance') {
    document.getElementById('mobileBalanceMenu').classList.remove('d-none');
  } else if (view === 'notification') {
    document.getElementById('mobileNotificationMenu').classList.remove('d-none');
  }
}

// Always show main menu on large screens
function handleResize() {
  const isLarge = window.innerWidth >= 992; // Bootstrap lg breakpoint
  if (isLarge) {
    document.getElementById('mobileMainMenu').classList.remove('d-none');
    document.getElementById('mobileBalanceMenu').classList.add('d-none');
    document.getElementById('mobileNotificationMenu').classList.add('d-none');
  }
}
window.addEventListener('resize', handleResize);
window.addEventListener('DOMContentLoaded', handleResize);

function showMainMenu() {
  document.getElementById('mobileMainMenu').classList.remove('d-none');
  document.getElementById('mobileBalanceMenu').classList.add('d-none');
  document.getElementById('mobileNotificationMenu').classList.add('d-none');
}