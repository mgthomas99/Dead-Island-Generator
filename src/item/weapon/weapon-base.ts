import { WeaponClass } from "./weapon-class";
import { WeaponType } from "./weapon-type";

export type WeaponBase = {
    name: string,
    type: WeaponType,
    classes: WeaponClass[],
    games: string[]
};
