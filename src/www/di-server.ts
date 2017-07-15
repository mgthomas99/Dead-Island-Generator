import { Application, Request, Response } from "express";
import * as express from "express"
import * as path from "path";

import { create } from "./../dead-island";

const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname + "/../../public"));

app.get("/", (req: Request, res: Response) => {
	res.sendFile(path.resolve("public/index.html"));
});

app.get("/weapon", (req: Request, res: Response) => {
	return create();
});

app.listen(port);
console.log("Hosting on port " + port + "!");
