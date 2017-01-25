
function attrib(attribute, property, value) {
    for (let e of document.getElementsByClassName("attrib-" + attribute)) {
        e.style.setProperty(property, value);
    }
}

function bind(attribute, value) {
    for (let e of document.getElementsByClassName("value-" + attribute)) {
        e.innerHTML = value;
    }
}

let prev;

function appendWeapon(weapon) {
    let span = document.createElement("li");
    span.classList.add("weapon");
    span.innerHTML = weapon.prefix + " " + weapon.name;

    if (prev == null) {
        document.getElementById("weapons").appendChild(span);
    } else {
        document.getElementById("weapons").insertBefore(span, prev);
    }
    prev = span;
}
