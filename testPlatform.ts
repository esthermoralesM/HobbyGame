import { Platform } from "./platform";

let platform1:Platform=new Platform("plataforma1", 2015, "compañía1", 64, "generacion1", true, true, "storage1", "black");
let platform2:Platform=new Platform("plataforma2", 2015, "compañía2", 32, "generacion2", false, false, "storage2", "white");
let platform3:Platform=new Platform("plataforma3", 2015, "compañía3", 64, "generacion3", true, false, "storage3", "black");

platform1.printAll();
console.log(platform2.toString());
platform3.setColor("red");
console.log(platform3.getColor());
console.log(platform2.getCompany());
