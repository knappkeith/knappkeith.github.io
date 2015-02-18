function getYear() { 
	d = new Date();
	n = d.getFullYear();
	document.getElementById('year').innerHTML = n; 
}