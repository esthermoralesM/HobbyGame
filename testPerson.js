"use strict";
exports.__esModule = true;
var Person_1 = require("./Person");
var p1 = new Person_1.Person("Esther", "Británica", "developer", 5);
var p2 = new Person_1.Person("Juan", "Italiana", "manager", 7);
var p3 = new Person_1.Person("Ana", "Colombiana", "director", 15);
var p4 = new Person_1.Person("Pedro", "Rusa", "developer", 4);
var p5 = new Person_1.Person("María", "Americana", "developer", 2);
console.log(p1.toString());
console.log(p2.getName());
p3.printAll();
p4.setProfession("tester");
console.log(p4.getProfession());