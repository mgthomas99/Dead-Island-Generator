import * as request from "request-promise-native";

import { WeaponBase } from "./weapon-base";
import { WeaponClass } from "./weapon-class";
import { WeaponType } from "./weapon-type";
import { Weapon } from "./weapon";

export class WeaponGenerator {

    public weapons: WeaponBase[];

    public constructor() {
        this.weapons = [];
    }

    public generate(): Weapon {
        const weapon = this.weapons[Math.floor(Math.random() * this.weapons.length)];
        const clas = WeaponClass.Common;
        return new Weapon("", weapon.name, clas, weapon.type);
    }

}
