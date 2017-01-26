import {create} from "./../dead-island";

export var game: string = "classic";
export var inv;

(function(){
    let xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open("GET", "inv-index.json");
    xobj.onreadystatechange = function(){
        if (this.readyState === 4) {
            let json = this.responseText;
            inv = JSON.parse(json);

            document.getElementById("weapon").onclick = create;
            create();
        }
    }
    xobj.send(null);
})();