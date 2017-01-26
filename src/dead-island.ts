import {GenericArrayUtils as ArrayUtils} from "./util";
import {attrib, bind} from "./element-hook";

export class Weapon {

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

    public prefix: string;
    public name: string;
    public clas: any;
    public type: any;

    public constructor(prefix: string, name: string, clas: {}, type: {}) {
        this.prefix = prefix;
        this.name = name;
        this.clas = clas;
        this.type = type;
    }

    public bind(): void {
        bind("weapon-level", Math.floor(Math.random() * inv.games[game]["level-cap"]));
        bind("weapon-name", this.name);
        bind("weapon-prefix", this.prefix);
        bind("weapon-type", this.type);
        attrib("weapon-color", "color", this.clas.color);
    }

    public fullName(): string {
        return this.prefix + " " + this.name;
    }

}

export function appendWeapon(weapon: Weapon): void {
    let span = document.createElement("li");
    span.classList.add("weapon");
    span.innerHTML = weapon.fullName();

    if (prev == null) {
        document.getElementById("weapons").appendChild(span);
    } else {
        document.getElementById("weapons").insertBefore(span, prev);
    }
    prev = span;
}

export function create(): void {
    let weapon = Weapon.random();
    appendWeapon(weapon);
    weapon.bind();
}

var game: string = "classic";
var inv: any;
let prev: HTMLSpanElement;

(function(){
    let xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open("GET", "inv-index.json");
    xobj.onreadystatechange = function(){
        if (this.readyState === 4) {
            let json = this.responseText;
            inv = JSON.parse(json);

            document.getElementById("weapon").onclick = function(){
                create();
            }
            create();
        }
    }
    xobj.send(null);
})();