"use strict";
exports.__esModule = true;
var Videogame_1 = require("./Videogame");
var Person_1 = require("./Person");
var platform_1 = require("./platform");
var person1 = new Person_1.Person("Shigeru Miyamoto", "Japanese", "developer", 5);
var person2 = new Person_1.Person("Hironobu Sakaguchi", "Japanese", "developer", 4);
var person3 = new Person_1.Person("Pedro", "Italiana", "developer", 3);
var person4Director = new Person_1.Person("Pedro", "American", "director", 3);
var developers;
developers = [person1, person2, person3];
var languages;
languages = ["English", "Spanish", "French", "Chinese"];
var platform1 = new platform_1.Platform("Google Stadia", 2015, "compañía1", 64, "generacion1", true, true, "storage1", "black");
var platform2 = new platform_1.Platform("Steam", 2015, "compañía2", 32, "generacion2", false, false, "storage2", "white");
var platform3 = new platform_1.Platform("Battle.net", 2015, "compañía3", 64, "generacion3", true, false, "storage3", "black");
var platforms;
platforms = [platform1, platform2, platform3];
var vgame1 = new Videogame_1.Videogame("Las Aventuras", 2019, developers, "american", person4Director, languages, platforms, 50, 10);
vgame1.printAll();
console.log(vgame1.toString());
vgame1.setScore(9);
console.log(vgame1.getScore());
console.log(vgame1.platformIsGoogleStadia(platform1));
console.log(vgame1.platformIsGoogleStadia(platform2));
console.log(vgame1.platformIsGoogleStadia(vgame1.platforms[0]));
console.log(vgame1.developerIsHironobuSakaguchi(person1));
console.log(vgame1.developerIsHironobuSakaguchi(vgame1.developers[1]));
console.log(vgame1.getNacionality());
console.log(vgame1.getLanguages());
vgame1.setLanguages(["Japanese", "English"]);
console.log(vgame1.getLanguages());
