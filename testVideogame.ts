import { Videogame } from "./Videogame";
import { Person } from "./Person";
import { Platform } from "./platform";

let person1:Person=new Person("Shigeru Miyamoto", "Japanese", "developer", 5);
let person2:Person=new Person("Hironobu Sakaguchi", "Japanese", "developer", 4);
let person3:Person=new Person("Pedro", "Italiana", "developer", 3);
let person4Director:Person=new Person("Pedro", "American", "director", 3);
let developers:Person[];
developers=[person1, person2, person3];

let languages:string[];
languages=["English", "Spanish", "French", "Chinese"];

let platform1:Platform=new Platform("Google Stadia", 2015, "compañía1", 64, "generacion1", true, true, "storage1", "black");
let platform2:Platform=new Platform("Steam", 2015, "compañía2", 32, "generacion2", false, false, "storage2", "white");
let platform3:Platform=new Platform("Battle.net", 2015, "compañía3", 64, "generacion3", true, false, "storage3", "black");
let platforms:Platform[];
platforms=[platform1, platform2, platform3];

let vgame1:Videogame=new Videogame("Las Aventuras", 2019,developers, "american", person4Director, languages, platforms, 50, 10);

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
