import {GenericArrayUtils as ArrayUtils} from "./../util";

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