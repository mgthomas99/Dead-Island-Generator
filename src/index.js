
class Weapon {

    static random() {
        while (true) {
            let weapon = ArrayUtils.randomElement(inv.weapons);
            let weapon_class = inv.classes[ArrayUtils.randomElement(weapon.classes)];

            if (Math.random() * 100 <= weapon_class.chance.default) {
                let w_prefix = ArrayUtils.randomElement(weapon_class.prefixes);
                return new Weapon(
                    w_prefix,
                    weapon.name,
                    weapon_class,
                    weapon.type
                );
            }
        }
    }

    constructor(prefix, name, clas, type) {
        this.prefix = prefix;
        this.name = name;
        this.clas = clas;
        this.type = type;
    }

}

var inv;

function create() {
    let weapon = Weapon.random();

    attrib("weapon_name", weapon.name);
    attrib("weapon_prefix", weapon.prefix);
    attrib("weapon_type", weapon.type);
    attrib("weapon_color", weapon.clas.color);
    appendWeapon(weapon);
}

(function() {
    let xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open("GET", "src/inv-index.json");
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
})();