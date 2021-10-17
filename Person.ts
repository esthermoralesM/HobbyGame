export class Person{

    private name:string;
    private nationality: string;
    private profession:string;
    private experienceYears:number;

    constructor(name:string, nationality:string, profession:string, experienceYears:number){
        this.name=name;
        this.nationality=nationality;
        this.profession=profession;
        this.experienceYears=experienceYears;
    }

    public getName():string{
        return this.name;
    }

    public setName(name:string){
        this.name=name;
    }

    public getNationality():string{
        return this.nationality;
    }

    public setNationality(nationality:string){
        this.nationality=nationality;
    }

    public getProfession():string{
        return this.profession;
    }

    public setProfession(profession:string){
        if(profession=="developer" || profession=="tester" || profession=="manager" || profession=="director"){
        this.profession=profession;
        }
    }

    public getExperienceYearse():number{
        return this.experienceYears;
    }

    public setExperienceYears(experienceYears:number){
        this.experienceYears=experienceYears;
    }

    public printAll(){
        console.log("Name: "+this.name+"\nNationality: "+this.nationality+"\nProfession: "+this.profession+"\nExperience years: "+
        this.experienceYears);
    }

    public toString():string{
        return "Name: "+this.name+"\nNationality: "+this.nationality+"\nProfession: "+this.profession+"\nExperience years: "+
        this.experienceYears;
    }
}