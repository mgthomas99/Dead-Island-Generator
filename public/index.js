
function getWeapon() {
	return new Promise((accept, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.onreadystatechange = () => {
			if (xhr.readyState === XMLHttpRequest.DONE) {
				accept(xhr.responseText);
			}
		}
		xhr.onerror = () => {
			reject("An error occurred");
		}
		xhr.open("GET", "http://localhost:8080/weapon", true);
		xhr.send(null);
	});
}


