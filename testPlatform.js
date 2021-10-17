"use strict";
exports.__esModule = true;
var platform_1 = require("./platform");
var platform1 = new platform_1.Platform("plataforma1", 2015, "compañía1", 64, "generacion1", true, true, "storage1", "black");
var platform2 = new platform_1.Platform("plataforma2", 2015, "compañía2", 32, "generacion2", false, false, "storage2", "white");
var platform3 = new platform_1.Platform("plataforma3", 2015, "compañía3", 64, "generacion3", true, false, "storage3", "black");
platform1.printAll();
console.log(platform2.toString());
platform3.setColor("red");
console.log(platform3.getColor());
console.log(platform2.getCompany());