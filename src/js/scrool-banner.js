const letsStartLink = document.getElementById('letsStart');

if (letsStartLink) {
	letsStartLink.addEventListener('click', function (e) {
		e.preventDefault();

		const targetId = this.getAttribute('href').substring(1);
		const targetElement = document.getElementById(targetId);

		if (targetElement) {
			const scrollOptions = {
				top: targetElement.offsetTop,
				behavior: 'smooth',
				duration: 2500, 
			};

			window.scrollTo(scrollOptions);
		}
	});
}
