
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

    bind() {
        bind("weapon-level", Math.floor(Math.random() * inv.games[game]["level-cap"]));
        bind("weapon-name", this.name);
        bind("weapon-prefix", this.prefix);
        bind("weapon-type", this.type);
        attrib("weapon-color", "color", this.clas.color);
    }

}

var game = "classic";
var inv;

function create() {
    let weapon = Weapon.random();
    appendWeapon(weapon);
    weapon.bind();
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