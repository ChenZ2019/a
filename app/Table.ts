import { Illness } from "./SampleRequest/Illness";
import { TypeOfSample } from "./SampleRequest/TypeOfSample";

export class Table {
    sampleRef: String;
    sampleType: Illness;
    sampleLoc: String;
    sampleEstadio: String;
    sampleNotas: String;
    sampleDate: Date;
    sampleTime: String;
    sampleIHQ: boolean;
    sampleIHGText: String;
    sampleIMS: boolean;
    sampleIMSText: String;
    sampleCariotipo: boolean;
    sampleCariotipoText: String;
    sampleFISH: boolean;
    sampleFISHText: String;
    sampleOtros: boolean;
    sampleOtrosext: String;
    sampleTypeOf: TypeOfSample;
    samplePercentage: String;
    samplePar: boolean;
    sampleReference: String;
    checkref: boolean;
    notcheckref: String;
    ki67: Number;
    cosmic: String;
    er: String;
    pr: String;
    her2: String;
    sampleHispa: String;
    sampleSubtype1: String;
    sampleSubtype2: String;
    sampleSubtype3: String;
}