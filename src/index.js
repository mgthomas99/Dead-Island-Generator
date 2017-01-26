(function(){
    System.config({
        transpiler: "typescript",
        packages: {
            "dist": {
                defaultExtension: "js"
            },
            "src": {
                defaultExtension: "ts"
            }
        }
    });
    System.import("./dist/dead-island.js");
})();