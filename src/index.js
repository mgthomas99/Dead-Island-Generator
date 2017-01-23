
class Weapon {

    static random() {
        while (true) {
            let weapon = ArrayUtils.randomElement(inv.weapons);
            console.log(weapon);
            let weapon_class = inv.classes[ArrayUtils.randomElement(weapon.classes)];

            if (Math.random() * 100 <= weapon_class.chance) {
                let w_prefix = ArrayUtils.randomElement(weapon_class.prefixes);
                return new Weapon(
                    w_prefix,
                    weapon.name,
                    weapon_class
                );
            }
        }
    }

    constructor(prefix, name, clas) {
        this.prefix = prefix;
        this.name = name;
        this.clas = clas;
    }

}

var inv;

function create() {
    let weapon = Weapon.random();

    append("weapon_name", weapon.name);
    append("weapon_prefix", weapon.prefix);
}

(function() {
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
})();