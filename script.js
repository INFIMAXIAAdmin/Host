$('.carousel').carousel({
	interval: 5000 //change slide every 5 seconds
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
	});
});
// Contact form AJAX submission
document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('contactForm');
  var thankYou = document.getElementById('thankYouMessage');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      }).then(function(response) {
        if (response.ok) {
          form.reset(); // This clears the form fields
          form.style.display = 'none';
          thankYou.style.display = 'block';
        }
      });
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.read-more-btn').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      var targetId = btn.getAttribute('data-target');
      var details = document.getElementById(targetId);
      if (details) {
        var isHidden = details.style.display === 'none' || details.style.display === '';
        details.style.display = isHidden ? 'block' : 'none';
        btn.textContent = isHidden ? 'Show Less' : 'Read More';
      }
    });
  });
});
