"use strict";
exports.__esModule = true;
exports.Videogame = void 0;
var Videogame = /** @class */ (function () {
    function Videogame(title, releaseYear, developers, nacionality, director, languages, platforms, price, score) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.developers = developers;
        this.nacionality = nacionality;
        this.director = director;
        this.languages = languages;
        this.platforms = platforms;
        this.price = price;
        this.score = score;
    }
    Videogame.prototype.getTitle = function () {
        return this.title;
    };
    Videogame.prototype.setTitle = function (title) {
        this.title = title;
    };
    Videogame.prototype.getReleaseYear = function () {
        return this.releaseYear;
    };
    Videogame.prototype.setReleaseYear = function (releaseYear) {
        this.releaseYear = releaseYear;
    };
    Videogame.prototype.getDevelopers = function () {
        return this.developers;
    };
    Videogame.prototype.setDevelopers = function (developers) {
        this.developers = developers;
    };
    Videogame.prototype.getNacionality = function () {
        return this.nacionality;
    };
    Videogame.prototype.setNacionality = function (nacionality) {
        this.nacionality = nacionality;
    };
    Videogame.prototype.getDirector = function () {
        return this.director;
    };
    Videogame.prototype.setDirector = function (direcor) {
        this.director = direcor;
    };
    Videogame.prototype.getLanguages = function () {
        return this.languages;
    };
    Videogame.prototype.setLanguages = function (languages) {
        this.languages = languages;
    };
    Videogame.prototype.getPlatforms = function () {
        return this.platforms;
    };
    Videogame.prototype.setPlatforms = function (platforms) {
        this.platforms = platforms;
    };
    Videogame.prototype.getPrice = function () {
        return this.price;
    };
    Videogame.prototype.setPrice = function (price) {
        this.price = price;
    };
    Videogame.prototype.getScore = function () {
        return this.score;
    };
    Videogame.prototype.setScore = function (score) {
        for (var i = 0; i <= 10; i++) {
            if (score == i) {
                this.score = score;
            }
        }
    };
    Videogame.prototype.platformIsGoogleStadia = function (platform) {
        var flag;
        if (platform.getName() == "Google Stadia") {
            flag = true;
        }
        else {
            flag = false;
        }
        return flag;
    };
    Videogame.prototype.developerIsHironobuSakaguchi = function (developer) {
        var flag;
        if (developer.getName() == "Hironobu Sakaguchi") {
            flag = true;
        }
        else {
            flag = false;
        }
        return flag;
    };
    Videogame.prototype.videogameIsInSpanish = function (language) {
        var flag;
        if (language == "spanish") {
            flag = true;
        }
        else {
            flag = false;
        }
        return flag;
    };
    Videogame.prototype.printAll = function () {
        console.log(this.toString());
    };
    Videogame.prototype.toString = function () {
        return "\nTitle: " + this.title + "\nRelease years: " + this.releaseYear + "\nDevelopers: " + this.developers + "\nNacionality: " + this.nacionality +
            "\nDirector: " + this.director + "\nLanguages: " + this.languages + "\nPlatforms: " + this.platforms + "\nPrice: " + this.price +
            "\nScore: " + this.score + "\n";
    };
    return Videogame;
}());
exports.Videogame = Videogame;
