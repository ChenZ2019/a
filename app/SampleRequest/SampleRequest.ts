import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Table } from '../Table';
import { Illness } from './Illness';
import { TypeOfSample } from './TypeOfSample';
import { FormControl, FormGroup } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Option } from './Option';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

/**
 * @title Dialog Overview
 */

@Component({
  selector: 'SampleRequest',
  templateUrl: 'SampleRequest.html',
  styleUrls: ['SampleRequest.css']
})
export class SampleRequest implements OnInit{

  row: Table = new Table();
  checkref: boolean;
  ref:number;
  test: boolean;
  diagnosticForm: FormGroup;
  myControl = new FormControl();
  myControl1 = new FormControl();
  myControl2 = new FormControl();
  myControl3 = new FormControl();
  options = new Array<Option>();
  optionsSubt1 = new Array<Option>();
  optionsSubt2 = new Array<Option>();
  optionsSubt3 = new Array<Option>();
  optionsMap = new Map<String, Option>();

  filteredOptions: Observable<Array<Option>>;
  filteredSubtype1Options: Observable<Array<Option>>;
  filteredSubtype2Options: Observable<Array<Option>>;
  filteredSubtype3Options: Observable<Array<Option>>;



  illnesses: Illness[] = [
    {type: "Tumor primario"},
    {type: "Metástasis"},
    {type: "Recidiva"},
    {type: "Tejido sano"}
  ];

  typesofsample: TypeOfSample[] = [
    {type: "Tejido pulmonar congelado"},
    {type: "Tejido pulmonar parafinado"},
    {type: "ADN tumoral"},
    {type: "ARN tumoral"},
    {type: "Otros"}
  ];

  
  sampleHispa;
  sampleSubtype1;
  sampleSubtype2;
  sampleSubtype3;

  ngOnInit(): void {
    this.initOptions();

    let that = this;
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => this.filter(value, this.options))
    );

    this.filteredSubtype1Options = this.myControl1.valueChanges
    .pipe(
      startWith(''),
      map(value => this.filter(value, this.optionsSubt1))
    );

    this.filteredSubtype2Options = this.myControl2.valueChanges
    .pipe(
      startWith(''),
      map(value => this.filter(value, this.optionsSubt2))
    );

    this.filteredSubtype3Options = this.myControl3.valueChanges
    .pipe(
      startWith(''),
      map(value => this.filter(value, this.optionsSubt3))
    );
  }

  initOptions() {
    let option1111 = new Option("Cáncer de Mama.1.1.1", []);
    let option1112 = new Option("Cáncer de Mama.1.1.2", []);
    let option1121 = new Option("Cáncer de Mama.1.2.1", []);
    let option1122 = new Option("Cáncer de Mama.1.2.2", []);
    let option1211 = new Option("Cáncer de Mama.2.1.1", []);
    let option1212 = new Option("Cáncer de Mama.2.1.2", []);
    let option1221 = new Option("Cáncer de Mama.2.2.1", []);
    let option1222 = new Option("Cáncer de Mama.2.2.2", []);
    let option111 = new Option("Cáncer de Mama.1.1",[option1111,option1112]);
    let option112 = new Option("Cáncer de Mama.1.2",[option1121,option1122]);
    let option121 = new Option("Cáncer de Mama.2.1",[option1211,option1212]);
    let option122 = new Option("Cáncer de Mama.2.2",[option1221,option1222]);
    let option11 = new Option("Cáncer de Mama.1",[option111,option112]);
    let option12 = new Option("Cáncer de Mama.2",[option121,option122]);
    let option1 = new Option("Cáncer de Mama",[option11,option12]);
    
    let option2111 = new Option("Cáncer de Cólon.1.1.1", []);
    let option2112 = new Option("Cáncer de Cólon.1.1.2", []);
    let option2121 = new Option("Cáncer de Cólon.1.2.1", []);
    let option2122 = new Option("Cáncer de Cólon.1.2.2", []);
    let option2211 = new Option("Cáncer de Cólon.2.1.1", []);
    let option2212 = new Option("Cáncer de Cólon.2.1.2", []);
    let option2221 = new Option("Cáncer de Cólon.2.2.1", []);
    let option2222 = new Option("Cáncer de Cólon.2.2.2", []);
    let option211 = new Option("Cáncer de Cólon.1.1",[option2111,option2112]);
    let option212 = new Option("Cáncer de Cólon.1.2",[option2121,option2122]);
    let option221 = new Option("Cáncer de Cólon.2.1",[option2211,option2212]);
    let option222 = new Option("Cáncer de Cólon.2.2",[option2221,option2222]);
    let option21 = new Option("Cáncer de Cólon.1",[option211,option212]);
    let option22 = new Option("Cáncer de Cólon.2",[option221,option222]);
    let option2 = new Option("Cáncer de Cólon",[option21,option22]);

    let option3111 = new Option("Otros.1.1.1", []);
    let option3112 = new Option("Otros.1.1.2", []);
    let option3121 = new Option("Otros.1.2.1", []);
    let option3122 = new Option("Otros.1.2.2", []);
    let option3211 = new Option("Otros.2.1.1", []);
    let option3212 = new Option("Otros.2.1.2", []);
    let option3221 = new Option("Otros.2.2.1", []);
    let option3222 = new Option("Otros.2.2.2", []);
    let option311 = new Option("Otros.1.1",[option3111,option3112]);
    let option312 = new Option("Otros.1.2",[option3121,option3122]);
    let option321 = new Option("Otros.2.1",[option3211,option3212]);
    let option322 = new Option("Otros.2.2",[option3221,option3222]);
    let option31 = new Option("Otros.1",[option311,option312]);
    let option32 = new Option("Otros.2",[option321,option322]);
    let option3 = new Option("Otros",[option31,option32]);
    
    this.optionsMap.set(option1.name, option1);
    this.optionsMap.set(option2.name, option2);
    this.optionsMap.set(option3.name, option3);
    
    this.options = Array.from(this.optionsMap.values());
  }


  constructor(
    public dialogRef: MatDialogRef<Table>,
    @Inject(MAT_DIALOG_DATA) public data : any){
      this.ref = data.ref;
      if(data.row != null){
        this.row = Object.assign({}, data.row);
      }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  showRef():boolean {
    return this.checkref === true;
  }

  showSubtype1():boolean {
    return this.sampleHispa != null && this.sampleHispa != "";
  }

  showSubtype2():boolean {
    return this.sampleSubtype1 != null && this.sampleSubtype1 != "";
  }

  showSubtype3():boolean {
    return this.sampleSubtype2 != null && this.sampleSubtype2 != "";
  }

  save(): void {
    if(this.data.row != null){
      Object.assign(this.data.row, this.row);
    }
    this.dialogRef.close(this.row);

  }

  showStuff() : boolean {
    return this.sampleHispa != null && this.sampleHispa != "" && this.sampleHispa == "Cáncer de Mama";
}

  showStuff2() : boolean {
  return this.sampleHispa != null && this.sampleHispa != "" && this.sampleHispa == "Cáncer de Cólon";
}

  
  updateSubtype1() {
    let optionSelected = this.optionsMap.get(this.sampleHispa);
    this.optionsSubt1 = Array.from(optionSelected.suboptions.values());
    this.optionsSubt2 = [];
    this.optionsSubt3 = [];
    this.sampleSubtype1 = "";

  }

  updateSubtype2() {
    let optionSelected = this.optionsMap.get(this.sampleHispa).suboptions.get(this.sampleSubtype1);
    this.optionsSubt2 = Array.from(optionSelected.suboptions.values());
    this.optionsSubt3 = [];
    this.sampleSubtype2 = "";
  }

  updateSubtype3() {
    let optionSelected = this.optionsMap.get(this.sampleHispa).suboptions.get(this.sampleSubtype1).suboptions.get(this.sampleSubtype2);
    this.optionsSubt3 = Array.from(optionSelected.suboptions.values());
    this.sampleSubtype3 = "";

  }


  private filter(value: string, options: Array<Option>): Array<Option> {
    const filterValue = value.toLowerCase();

    return options.filter(option => option.name.toLowerCase().includes(filterValue));
  }
}