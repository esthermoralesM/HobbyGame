"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, nationality, profession, experienceYears) {
        this.name = name;
        this.nationality = nationality;
        this.profession = profession;
        this.experienceYears = experienceYears;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    Person.prototype.getNationality = function () {
        return this.nationality;
    };
    Person.prototype.setNationality = function (nationality) {
        this.nationality = nationality;
    };
    Person.prototype.getProfession = function () {
        return this.profession;
    };
    Person.prototype.setProfession = function (profession) {
        if (profession == "developer" || profession == "tester" || profession == "manager" || profession == "director") {
            this.profession = profession;
        }
    };
    Person.prototype.getExperienceYearse = function () {
        return this.experienceYears;
    };
    Person.prototype.setExperienceYears = function (experienceYears) {
        this.experienceYears = experienceYears;
    };
    Person.prototype.printAll = function () {
        console.log(this.toString());
    };
    Person.prototype.toString = function () {
        return "Name: " + this.name + "\nNationality: " + this.nationality + "\nProfession: " + this.profession + "\nExperience years: " +
            this.experienceYears;
    };
    return Person;
}());
exports.Person = Person;
