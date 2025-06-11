document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('#trading-tabs-nav .nav-link');
  const tabContents = [
    document.getElementById('tab1-content'),
    document.getElementById('tab2-content'),
    document.getElementById('tab3-content')
  ];

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      // Remove active class from all links
      navLinks.forEach(l => l.classList.remove('active'));
      // Hide all tab contents
      tabContents.forEach(tc => tc.style.display = 'none');
      // Add active to clicked link
      this.classList.add('active');
      // Show the corresponding tab content
      const tabId = this.getAttribute('data-tab');
      document.getElementById(tabId + '-content').style.display = 'block';
    });
  });
});