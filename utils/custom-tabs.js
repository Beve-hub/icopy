document.addEventListener('DOMContentLoaded', function () {
  const tabButtons = document.querySelectorAll('.custom-tab');
  const tabPanes = document.querySelectorAll('.custom-tab-pane');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-tab');

      // Update active class on buttons
      tabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Update active class on content panes
      tabPanes.forEach(pane => {
        pane.classList.toggle('active', pane.id === targetId);
      });
    });
  });
});
