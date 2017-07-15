import { WeaponClass } from "./weapon-class";
import { WeaponType } from "./weapon-type";

export class Weapon {

    public static generate(): Weapon {
        const clas: WeaponClass = <any> WeaponClass[Math.floor(Math.random() * (Object.keys(WeaponClass).length / 2))];
        const type: WeaponType = <any> WeaponType[Math.floor(Math.random() * (Object.keys(WeaponType).length / 2))];
        return new Weapon("", "Machete", clas, type);
    }

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