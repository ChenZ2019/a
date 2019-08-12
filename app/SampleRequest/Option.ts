export class Option {
    name : String;
    suboptions : Map<String, Option>;
    constructor(name : String, suboptions : Array<Option>) {
        this.name = name;
        this.suboptions = new Map();
        for(let option of suboptions){
            this.suboptions.set(option.name, option);
        }
        
    }
}