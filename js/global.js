function getYear() { 
	d = new Date();
	n = d.getFullYear();
	document.getElementById('year').innerHTML = n; 
}

jQuery(document).ready(function() {
    jQuery('.nailthumb-container').nailthumb({imageFromWrappingLink: true,});
});
