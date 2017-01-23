
class Weapon {

    static random() {
        while (true) {
            let item = inv.weapons[Math.floor(Math.random() * inv.weapons.length)];
            if (Math.random() * 100 <= inv.classes[item.class].chance) {
                return new Weapon(
                    item.name,
                    item.class,
                    item.type
                );
            }
        }
    }

    constructor(name, clas, type) {
        this.name = name;
        this.type = type;
        this.class = clas;
    }

    toString() {
        return this.name;
    }

}

var element_weapon_prefix = document.getElementById("weapon-prefix");
var element_weapon_name = document.getElementById("weapon-name");
var element_weapon_type = document.getElementById("weapon-type");
var inv;

function loadInvIndex() {
    let xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open("GET", "src/inv-index.json", true);
    xobj.onreadystatechange = function() {
        if (this.readyState === 4) {
            let json = this.responseText;
            inv = JSON.parse(this.responseText);

            document.getElementById("weapon").onclick = function() {
                create();
            }
            create();
        }
    }
    xobj.send(null);
}

function load() {
    loadInvIndex();
}

function create() {
    let weapon = Weapon.random();
    let prefixes = inv.classes[weapon.class].prefixes;

    element_weapon_name.innerHTML = formatForDisplay(weapon.name);
    element_weapon_prefix.innerHTML = prefixes[Math.floor(Math.random() * prefixes.length)];
    element_weapon_type.innerHTML = weapon.type;
}

load();