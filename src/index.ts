import { Application, Request, Response } from "express";
import * as express from "express"
import * as path from "path";
import * as request from "request-promise-native";

import { WeaponClass } from "./item/weapon/weapon-class";
import { WeaponGenerator } from "./item/weapon/weapon-generator";
import { WeaponType } from "./item/weapon/weapon-type";
import { Weapon } from "./item/weapon/weapon";

const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname + "/../public"));

app.get("/", (req: Request, res: Response) => {
    res.sendFile(path.resolve("public/index.html"));
});

app.get("/weapon", (req: Request, res: Response) => {
    res.send(generator.generate());
});

app.listen(port);
console.log("Hosting on port " + port + "!");

const w = {
    "bolo_machete": {
        "name": "Bolo Machete",
        "type": "sharp",
        "classes": ["common", "uncommon"],
        "games": ["Classic", "Riptide"]
    },
    "diving_knife": {
        "name": "Diving Knife",
        "type": "sharp",
        "classes": ["common", "uncommon"],
        "games": ["Classic", "Riptide"]
    },
    "homemade_knife": {
        "name": "Homemade Knife",
        "type": "sharp",
        "classes": ["common", "uncommon"],
        "games": ["Classic", "Riptide"]
    },
    "homemade_machete": {
        "name": "Homemade Machete",
        "type": "sharp",
        "classes": ["uncommon", "rare"],
        "games": ["Classic", "Riptide"]
    },
    "kitchen_knife": {
        "name": "Kitchen Knife",
        "type": "sharp",
        "classes": ["common", "uncommon"],
        "games": ["Classic", "Riptide"]
    },
    "knife": {
        "name": "Knife",
        "type": "sharp",
        "classes": ["common", "uncommon"],
        "games": ["Classic", "Riptide"]
    },
    "kukri_machete": {
        "name": "Kukri Machete",
        "type": "sharp",
        "classes": ["uncommon", "rare"],
        "games": ["Classic"]
    },
    "military_knife": {
        "name": "Military Knife",
        "type": "sharp",
        "classes": ["uncommon", "rare"],
        "games": ["Classic", "Riptide"]
    },
    "military_machete": {
        "name": "Military Machete",
        "type": "sharp",
        "classes": ["uncommon", "rare"],
        "games": ["Classic", "Riptide"]
    },
    "wicked_knife": {
        "name": "Wicked Knife",
        "type": "sharp",
        "classes": ["uncommon", "rare"],
        "games": ["Classic", "Riptide"]
    },
    "assassins_greed": {
        "name": "Assassin's Greed",
        "type": "sharp",
        "classes": ["legendary"],
        "games": ["Classic"]
    },
    "ban": {
        "name": "Ban",
        "type": "blunt",
        "classes": ["legendary"],
        "games": ["Riptide"]
    },
    "banisher": {
        "name": "Banisher",
        "type": "sharp",
        "classes": ["legendary"],
        "games": ["Riptide"]
    },
    "blunt_speaker": {
        "name": "Blunt Speaker",
        "type": "blunt",
        "classes": ["legendary"],
        "games": ["Classic"]
    },
    "bouncers_pal": {
        "name": "Bouncer's Pal",
        "type": "blunt",
        "classes": ["legendary"],
        "games": ["Riptide"]
    },
    "bushmaster": {
        "name": "Bushmaster",
        "type": "sharp",
        "classes": ["legendary"],
        "games": ["Classic"]
    },
    "crowd_pleaser": {
        "name": "Crowd Pleaser",
        "type": "firearm",
        "classes": ["legendary"],
        "games": ["Classic"]
    },
    "dotm": {
        "name": "Defender of the Motherland",
        "type": "firearm",
        "classes": ["legendary"],
        "games": ["Classic"]
    },
    "eviscerator": {
        "name": "Eviscerator",
        "type": "sharp",
        "classes": ["legendary"],
        "games": ["Classic"]
    },
    "gabriels_sledgehammer": {
        "name": "Gabriel's Sledgehammer",
        "type": "blunt",
        "classes": ["legendary"],
        "games": ["Classic"]
    },
    "home_run": {
        "name": "Home Run",
        "type": "blunt",
        "classes": ["legendary"],
        "games": ["Classic"]
    },
    "italian_plumber": {
        "name": "Italian Plumber",
        "type": "blunt",
        "classes": ["legendary"],
        "games": ["Classic"]
    },
    "mc": {
        "name": "M.C.",
        "type": "blunt",
        "classes": ["legendary"],
        "games": ["Classic"]
    },
    "master_chef": {
        "name": "Master Chef",
        "type": "sharp",
        "classes": ["legendary"],
        "games": ["Riptide"]
    },
    "mccalls_9mm": {
        "name": "McCall's 9mm",
        "type": "firearm",
        "classes": ["legendary"],
        "games": ["Classic"]
    },
    "pod": {
        "name": "Pick of Destiny",
        "type": "blunt",
        "classes": ["legendary"],
        "games": ["Riptide"]
    },
    "tijuana_machete": {
        "name": "Tijuana Machete",
        "type": "sharp",
        "classes": ["legendary"],
        "games": ["Riptide"]
    },
    "two_parter": {
        "name": "Two Parter",
        "type": "blunt",
        "classes": ["legendary"],
        "games": ["Classic"]
    },
    "vots": {
        "name": "Viking of the South",
        "type": "sharp",
        "classes": ["legendary"],
        "games": ["Classic"]
    },
    "zeds_dimise": {
        "name": "Zed's Dimise",
        "type": "sharp",
        "classes": ["legendary"],
        "games": ["Classic"]
    }
};


const generator = new WeaponGenerator();
Promise.resolve(w)
        .catch(err => { throw err; })
        .then(weapons => {
            Object.keys(weapons).forEach(x => {
                const item = weapons[x];
                generator.weapons.push({
                    name: item.name,
                    type: item.type,
                    classes: item.classes,
                    games: item.games
                });
            });
        });
