$('.carousel').carousel({
	interval:5000 //change slide every 5 seconds
	});
	// Simple filter logic
  const buttons = document.querySelectorAll('[data-filter]');
  const items = document.querySelectorAll('.project-item');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      items.forEach(item => {
        item.style.display = (filter === 'all' || item.classList.contains(filter)) ? 'block' : 'none';
      });