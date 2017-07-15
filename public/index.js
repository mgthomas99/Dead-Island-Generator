
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
		xhr.open("GET", "/weapon", true);
		xhr.send(null);
	});
}

function weapon() {
	getWeapon()
			.catch(err => { throw err; })
			.then(weapon => {
				weapon = JSON.parse(weapon);
				const name = weapon.prefix + " " + weapon.name;
				weapon_element.innerText = name;

				const li_item = document.createElement("li");
				li_item.innerText = weapon_element.innerText;
				inventory_element.appendChild(li_item);
			})
}

const inventory_element = document.getElementById("weapons");
const weapon_element = document.getElementById("weapon");

weapon_element.addEventListener("click", (ev) => {
	weapon();
});
weapon();
