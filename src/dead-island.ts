import {GenericArrayUtils as ArrayUtils} from "./util";
import {Weapon} from "./inv/weapon";
import {attrib, bind} from "./element-hook";

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

let prev: HTMLSpanElement;
