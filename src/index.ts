import { Application, Request, Response } from "express";
import * as express from "express"
import * as path from "path";

import { WeaponClass } from "./item/weapon/weapon-class";
import { WeaponType } from "./item/weapon/weapon-type";
import { Weapon } from "./item/weapon/weapon";

const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname + "/../public"));

app.get("/", (req: Request, res: Response) => {
	res.sendFile(path.resolve("public/index.html"));
});

app.get("/weapon", (req: Request, res: Response) => {
	res.send(Weapon.generate());
});

app.listen(port);
console.log("Hosting on port " + port + "!");
