// Offset for Site Navigation
$('#siteNav').affix({
	offset: {
		top: 100
	}
});

const formData = new FormData(document.getElementById('contact-form'));
fetch('https://formspree.io/f/xqekddaz', {
  method: 'POST',
  body: formData  // This sends multipart/form-data
});