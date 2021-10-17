export class Platform{

    private name:string;
    private releaseYears:number;
    private company:string;
    private nBits:number;
    private generation:string;
    private hasHD:boolean;
    private hasInternetConnection:boolean;
    private storageDevice: string;
    private color:string;

    constructor(name:string, releaseYears:number, company:string, nBits:number, generation:string, hasHD:boolean, hasInternetConnection:boolean,
                storageDevice:string, color:string){
                    this.name=name;
                    this.releaseYears=releaseYears;
                    this.company=company;
                    this.nBits=nBits;
                    this.generation=generation;
                    this.hasHD=hasHD;
                    this.hasInternetConnection=hasInternetConnection;
                    this.storageDevice=storageDevice;
                    this.color=color;
                }

    public getName():string{
        return this.name;
    }

    public setName(name:string){
        this.name=name;
    }

    public getReleaseYears():number{
        return this.releaseYears;
    }

    public setReleaseYears(releaseYears:number){
        this.releaseYears=releaseYears;
    }

    public getCompany():string{
        return this.company;
    }

    public setCompany(company:string){
        this.company=company;
    }

    public getNbits():number{
        return this.nBits;
    }

    public setNBits(nBits:number){
        this.nBits=nBits;
    }

    public getGeneration():string{
        return this.generation;
    }

    public setGeneration(generation:string){
        this.generation=generation;
    }

    public getHasHD():boolean{
        return this.hasHD;
    }

    public setHasHD(hasHD:boolean){
        this.hasHD=hasHD;
    }

    public getHasInternetConnection():boolean{
        return this.hasInternetConnection;
    }

    public setHasInternetConnection(hasInternetConnection:boolean){
        this.hasInternetConnection=hasInternetConnection;
    }

    public getStorageDevice():string{
        return this.storageDevice;
    }

    public setStorageDevice(storageDevice:string){
        if(storageDevice=="cartucho" || storageDevice=="targeta" || storageDevice=="cd" || storageDevice=="dvd" || storageDevice=="bluray"){
        this.storageDevice=storageDevice;
        }
    }

    public getColor():string{
        return this.color;
    }

    public setColor(color:string){
        this.color=color;
    }

    public printAll(){
        console.log(this.toString());
    }
 
    public toString():string{
        return "Name: "+this.name+"\nRelease Years: "+this.releaseYears+"\nCompany: "+this.company+"\nNbits: "+this.nBits
        +"\nGeneration: "+this.generation+"\nHasHD: "+this.hasHD+"\nHas internet connection: "+this.hasInternetConnection
        +"\nStorage Device: "+this.storageDevice+"\nColor: "+this.color;
    }

}