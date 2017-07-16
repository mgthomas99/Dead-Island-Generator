import { WeaponClass } from "./weapon-class";
import { WeaponType } from "./weapon-type";

export class Weapon {

    public clas: WeaponClass;
    public type: WeaponType;
    public prefix: string;
    public name: string;

    public get fullName(): string {
        return this.prefix + " " + this.name;
    }

    public constructor(prefix: string, name: string, clas: WeaponClass, type: WeaponType) {
        this.prefix = prefix;
        this.name = name;
        this.clas = clas;
        this.type = type;
    }

}
