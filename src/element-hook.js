
var attributes = {
    "weapon_name"  : (val) => document.getElementById("weapon-name").innerHTML = val,
    "weapon_prefix": (val) => document.getElementById("weapon-prefix").innerHTML = val,
    "weapon_type"  : (val) => document.getElementById("weapon-type").innerHTML = val,

    "weapon_color": (val) => document.getElementById("weapon").style.setProperty("color", `rgb(${val[0]}, ${val[1]}, ${val[2]})`)
};

let prev;

function appendWeapon(weapon) {
    let span = document.createElement("li");
    span.classList.add("weapon");
    span.style.setProperty("color", `rgb(${weapon.clas.color[0]}, ${weapon.clas.color[1]}, ${weapon.clas.color[2]})`);
    span.innerHTML = weapon.prefix + " " + weapon.name;

    if (prev == null) {
        document.getElementById("weapons").appendChild(span);
    } else {
        document.getElementById("weapons").insertBefore(span, prev);
    }
    prev = span;
}

function attrib(attr, val) {
    // Remove this replacement line when a font license has been purchased.
    if (typeof(val) === "string") {
        val = val.replace(new RegExp("'", 'g'), "")
                    .replace(new RegExp("1", 'g'), "One ")
                    .replace(new RegExp("2", 'g'), "Two ")
                    .replace(new RegExp("3", 'g'), "Three ")
                    .replace(new RegExp("4", 'g'), "Four ")
                    .replace(new RegExp("5", 'g'), "Five ")
                    .replace(new RegExp("6", 'g'), "Six ")
                    .replace(new RegExp("7", 'g'), "Seven ")
                    .replace(new RegExp("8", 'g'), "Eight ")
                    .replace(new RegExp("9", 'g'), "Nine ")
    };
    attributes[attr](val);
}