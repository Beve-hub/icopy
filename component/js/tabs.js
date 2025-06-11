window.addEventListener('DOMContentLoaded', function() {
  const defaultContent = document.getElementById('default-content');
  if (defaultContent) defaultContent.style.display = 'block';
  document.querySelectorAll('.tab-pane').forEach(pane => {
    pane.style.display = 'none';
    pane.classList.remove('active');
  });
  document.querySelectorAll('.profile-tab-link').forEach(link => link.classList.remove('active'));
});

document.querySelectorAll('.profile-tab-link').forEach(tab => {
  tab.addEventListener('click', function(e) {
    e.preventDefault();

    // Hide default content when a tab is shown
    const defaultContent = document.getElementById('default-content');
    if (defaultContent) defaultContent.style.display = 'none';

    document.querySelectorAll('.profile-tab-link').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(pane => {
      pane.style.display = 'none';
      pane.classList.remove('active');
    });

    this.classList.add('active');
    const tabId = this.getAttribute('data-tab');
    const content = document.getElementById(tabId + '-content');
    if (content) {
      content.style.display = 'block';
      content.classList.add('active');
    }
  });
});

document.addEventListener('click', function(e) {
  if (e.target.classList.contains('back-btn')) {
    // Hide all tab contents and remove active
    document.querySelectorAll('.tab-pane').forEach(pane => {
      pane.style.display = 'none';
      pane.classList.remove('active');
    });
    document.querySelectorAll('.profile-tab-link').forEach(link => link.classList.remove('active'));
    // Show default content
    const defaultContent = document.getElementById('default-content');
    if (defaultContent) defaultContent.style.display = 'block';
  }
});