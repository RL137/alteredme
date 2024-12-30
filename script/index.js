const fileInput = document.getElementById('fileInput');
const image = document.getElementById('userimg');

fileInput.addEventListener('change', function() {
	const file = fileInput.files[0];
	if (file) {
		const reader = new FileReader();
		reader.onload = function(e) {
			console.log(e.target.result);
			image.src = e.target.result;
			image.style.animation = "transformationUser 5s infinite"; 
			document.getElementById('altered').src = "img/altered.gif" 
			document.getElementById('altered').style.animation = "transformationAltered 5s infinite"; 
		}
		reader.readAsDataURL(file);
	}
});
