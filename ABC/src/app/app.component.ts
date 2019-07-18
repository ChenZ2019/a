import { Component, OnInit} from '@angular/core';
import { Table } from './Table';
import {GroupOptions} from './GroupOptions';
import {Checker} from './Checker';

const panel170:String = "Panel Cáncer 170";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  table: Array<Table> = new Array<Table>();
  options: Array<GroupOptions>; 
  panel: String;
  checkers: Array<Checker>;

  ngOnInit() {
    let group : GroupOptions = new GroupOptions();
    let group2 : GroupOptions = new GroupOptions();
    group.group = "Tumores sólidos";
    group.options = new Array<String>();
    group.options = ["Mamma GeneProfile",panel170,"Exoma tumoral 51 Mb (Investigación)","Exoma tumoral 71 Mb (Investigación)"]

    group2.group =  "Oncohematología";
    group2.options = new Array<String>();
    group2.options = ["Panel LEUCEMIA MIELOIDE AGUDA","Panel MYELOID NEOPLASM"];
    this.options = [group, group2];

    let oncobytes : Checker = new Checker();
    let oncobytes2 : Checker = new Checker();
    let oncobytes3 : Checker = new Checker();
    let oncobytes4 : Checker = new Checker();
    let oncobytes5 : Checker = new Checker();
    let oncobytes6 : Checker = new Checker();
    let oncobytes7 : Checker = new Checker();
    let oncobytes8 : Checker = new Checker();
    let oncobytes9 : Checker = new Checker();
    let oncobytes10 : Checker = new Checker();
    let oncobytes11 : Checker = new Checker();
    let oncobytes12 : Checker = new Checker();
    let oncobytes13 : Checker = new Checker();
    let oncobytes14 : Checker = new Checker();
    let oncobytes15 : Checker = new Checker();
    let oncobytes16 : Checker = new Checker();
    let oncobytes17 : Checker = new Checker();
    let oncobytes18 : Checker = new Checker();
    let oncobytes19 : Checker = new Checker();
    oncobytes.gene = "ABL1";
    oncobytes.checkbox = false;
    oncobytes2.gene = "AKT1";
    oncobytes2.checkbox = false;
    oncobytes3.gene = "AKT2";
    oncobytes3.checkbox = false;
    oncobytes4.gene = "AKT3";
    oncobytes4.checkbox = false;
    oncobytes5.gene = "ALK";
    oncobytes5.checkbox = false;
    oncobytes6.gene = "APC";
    oncobytes6.checkbox = false;
    oncobytes7.gene = "AR";
    oncobytes7.checkbox = false;
    oncobytes8.gene = "ARID1A";
    oncobytes8.checkbox = false;
    oncobytes9.gene = "ATM";
    oncobytes9.checkbox = false;
    oncobytes10.gene = "ATR";
    oncobytes10.checkbox = false;
    oncobytes11.gene = "AXL";
    oncobytes11.checkbox = false;
    oncobytes12.gene = "BAP1";
    oncobytes12.checkbox = false;
    oncobytes13.gene = "BARD1";
    oncobytes13.checkbox = false;
    oncobytes14.gene = "BCL2";
    oncobytes14.checkbox = false;
    oncobytes15.gene = "BCL6";
    oncobytes15.checkbox = false;
    oncobytes16.gene = "BRAF";
    oncobytes16.checkbox = false;
    oncobytes17.gene = "BRCA1";
    oncobytes17.checkbox = false;
    oncobytes18.gene = "BRCA2";
    oncobytes18.checkbox = false;
    oncobytes19.gene = "BRIP1";
    oncobytes19.checkbox = false;

    this.checkers = [oncobytes,oncobytes2,oncobytes3,oncobytes4,
      oncobytes5,oncobytes6,oncobytes7,oncobytes8,oncobytes9,
      oncobytes10,oncobytes11,oncobytes12,oncobytes13,oncobytes14,
      oncobytes15,oncobytes16,oncobytes17,oncobytes18,oncobytes19];


    
  }
  

  addElement(){
    let row:Table=new Table();
    this.table.push(row);
  }

  deleteRow(row:Table){
    let index:number = this.table.indexOf(row);
    this.table.splice(index,1);
    }

    showChecks():boolean {
      return this.panel === panel170;
    }

}

