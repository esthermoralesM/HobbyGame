import { Person } from "./Person";

let p1:Person=new Person("Esther", "Británica", "developer", 5);
let p2:Person=new Person("Juan", "Italiana", "manager", 7);
let p3:Person=new Person("Ana", "Colombiana", "director", 15);
let p4:Person=new Person("Pedro", "Rusa", "developer", 4);
let p5:Person=new Person("María", "Americana", "developer", 2);

console.log(p1.toString());
console.log(p2.getName());
p3.printAll();
p4.setProfession("tester");
console.log(p4.getProfession());
console.log(p5.getExperienceYearse());
