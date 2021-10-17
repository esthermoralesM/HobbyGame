"use strict";
exports.__esModule = true;
exports.Platform = void 0;
var Platform = /** @class */ (function () {
    function Platform(name, releaseYears, company, nBits, generation, hasHD, hasInternetConnection, storageDevice, color) {
        this.name = name;
        this.releaseYears = releaseYears;
        this.company = company;
        this.nBits = nBits;
        this.generation = generation;
        this.hasHD = hasHD;
        this.hasInternetConnection = hasInternetConnection;
        this.storageDevice = storageDevice;
        this.color = color;
    }
    Platform.prototype.getName = function () {
        return this.name;
    };
    Platform.prototype.setName = function (name) {
        this.name = name;
    };
    Platform.prototype.getReleaseYears = function () {
        return this.releaseYears;
    };
    Platform.prototype.setReleaseYears = function (releaseYears) {
        this.releaseYears = releaseYears;
    };
    Platform.prototype.getCompany = function () {
        return this.company;
    };
    Platform.prototype.setCompany = function (company) {
        this.company = company;
    };
    Platform.prototype.getNbits = function () {
        return this.nBits;
    };
    Platform.prototype.setNBits = function (nBits) {
        this.nBits = nBits;
    };
    Platform.prototype.getGeneration = function () {
        return this.generation;
    };
    Platform.prototype.setGeneration = function (generation) {
        this.generation = generation;
    };
    Platform.prototype.getHasHD = function () {
        return this.hasHD;
    };
    Platform.prototype.setHasHD = function (hasHD) {
        this.hasHD = hasHD;
    };
    Platform.prototype.getHasInternetConnection = function () {
        return this.hasInternetConnection;
    };
    Platform.prototype.setHasInternetConnection = function (hasInternetConnection) {
        this.hasInternetConnection = hasInternetConnection;
    };
    Platform.prototype.getStorageDevice = function () {
        return this.storageDevice;
    };
    Platform.prototype.setStorageDevice = function (storageDevice) {
        if (storageDevice == "cartucho" || storageDevice == "targeta" || storageDevice == "cd" || storageDevice == "dvd" || storageDevice == "bluray") {
            this.storageDevice = storageDevice;
        }
    };
    Platform.prototype.getColor = function () {
        return this.color;
    };
    Platform.prototype.setColor = function (color) {
        this.color = color;
    };
    Platform.prototype.printAll = function () {
        console.log(this.toString());
    };
    Platform.prototype.toString = function () {
        return "Name: " + this.name + "\nRelease Years: " + this.releaseYears + "\nCompany: " + this.company + "\nNbits: " + this.nBits
            + "\nGeneration: " + this.generation + "\nHasHD: " + this.hasHD + "\nHas internet connection: " + this.hasInternetConnection
            + "\nStorage Device: " + this.storageDevice + "\nColor: " + this.color;
    };
    return Platform;
}());
exports.Platform = Platform;
