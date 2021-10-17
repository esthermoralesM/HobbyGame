import { Person } from "./Person";
import { Platform } from "./platform";

export class Videogame{

    title: string;
    releaseYear: number;
    developers: Person[];
    nacionality: string;
    director: Person;
    languages: string[];
    platforms: Platform[];
    price: number;
    score: number;
    
    constructor(title:string, releaseYear:number, developers:Person[], nacionality:string, director:Person, languages:string[],
                platforms:Platform[], price:number, score:number){
                
                this.title=title;
                this.releaseYear=releaseYear;
                this.developers=developers;
                this.nacionality=nacionality;
                this.director=director;
                this.languages=languages;
                this.platforms=platforms;
                this.price=price;
                this.score=score;
    }

    public getTitle():string{
        return this.title;
    }

    public setTitle(title:string){
        this.title=title;
    }

    public getReleaseYear():number{
        return this.releaseYear;
    }

    public setReleaseYear(releaseYear:number){
        this.releaseYear=releaseYear;
    }

    public getDevelopers():Person[]{
        return this.developers;
    }

    public setDevelopers(developers:Person[]){
        this.developers=developers;
    }

    public getNacionality():string{
        return this.nacionality;
    }

    public setNacionality(nacionality:string){
        this.nacionality=nacionality;
    }

    public getDirector():Person{
        return this.director;
    }

    public setDirector(direcor:Person){
        this.director=direcor;
    }

    public getLanguages():string[]{
        return this.languages;
    }

    public setLanguages(languages:string[]){
        this.languages=languages;
    }

    public getPlatforms():Platform[]{
        return this.platforms;
    }

    public setPlatforms(platforms:Platform[]){
        this.platforms=platforms;
    }

    public getPrice():number{
        return this.price;
    }

    public setPrice(price:number){
        this.price=price;
    }

    public getScore():number{
        return this.score;
    }

    public setScore(score:number){
        for(let i=0;i<=10;i++){
            if(score==i){
                this.score=score;
            }
        } 
    }

    public platformIsGoogleStadia(platform:Platform):boolean{
        let flag:boolean;
        if(platform.getName()=="Google Stadia"){
            flag=true;
        }else{
            flag=false;
        }
        return flag;
    }

    public developerIsHironobuSakaguchi(developer:Person):boolean{
        let flag:boolean;

        if(developer.getName()=="Hironobu Sakaguchi"){
            flag=true;
        }else{
            flag=false;
        }
        return flag;
    }

    public videogameIsInSpanish(language:string):boolean{
        let flag:boolean;

        if(language=="spanish"){
            flag=true;
        }else{
            flag=false;
        }
        return flag;
    }

    public printAll(){
        console.log(this.toString());
    }

    public toString():string{
        return "\nTitle: "+this.title+"\nRelease years: "+this.releaseYear+"\nDevelopers: "+this.developers+"\nNacionality: "+this.nacionality+
        "\nDirector: "+this.director+"\nLanguages: "+this.languages+"\nPlatforms: "+this.platforms+"\nPrice: "+this.price+
        "\nScore: "+this.score+"\n"
    }
}