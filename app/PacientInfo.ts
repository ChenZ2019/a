import { Ethnicity } from "./Ethnicity";
import { Gender } from "./Gender";
import { TypeDoc } from "./TypeDoc";

export class PacientInfo {
    name: String;
    surname: String;
    typeDoc: TypeDoc;
    idDoc: String;
    gender: Gender;
    date: Date;
    ethnicity: Ethnicity;
    relevantInfo: String;
    treatmentInfo: String;
    age: String;
    typeSurgery: String;
    firstDiagnosticDate: Date;
    file: File;
    inform: boolean;
    consent: boolean;
    diagnostic: boolean;
    investigative: boolean;

}