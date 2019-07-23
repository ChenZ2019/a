import { Component, OnInit, Inject} from '@angular/core';
import { Table } from './Table';
import {GroupOptions} from './GroupOptions';
import {Gene} from './Gene';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogOverviewExampleDialog} from './dialog-overview-example-dialog/dialog-overview-example-dialog';

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
  genes: Array<Gene>;
  selectedvalue: boolean;

  constructor(private dialog: MatDialog){

  }

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
    this.genes = [
    this.gene('ABL1'),this.gene('BRCA2'),this.gene('CHEK2'),this.gene('ETV1'),this.gene('FGF5'),this.gene('HNF1A'),this.gene('MDM4'),this.gene('NOTCH1'),this.gene('PIK3CG'),this.gene('ROS1'),
    this.gene('AKT1'),this.gene('BRIP1'),this.gene('CREBBP'),this.gene('ETV4'),this.gene('FGF6'),this.gene('HRAS'),this.gene('MET'),this.gene('NOTCH2'),this.gene('PIK3R1'),this.gene('RPS6KB1'),
    this.gene('AKT2'),this.gene('BTK'),this.gene('CSF1R'),this.gene('ETV5'),this.gene('FGF7'),this.gene('IDH1'),this.gene('MLH1'),this.gene('NOTCH3'),this.gene('PMS2'),this.gene('SLX4'),
    this.gene('AKT3'),this.gene('CARD11'),this.gene('CTNNB1'),this.gene('EWSR1'),this.gene('FGF8'),this.gene('IDH2'),this.gene('MLLT3'),this.gene('NPM1'),this.gene('PPARG'),this.gene('SMAD4'),
    this.gene('ALK'),this.gene('CCND1'),this.gene('DDR2'),this.gene('EZH2'),this.gene('FGF9'),this.gene('INPP4B'),this.gene('MPL'),this.gene('NRAS'),this.gene('PPP2R2A'),this.gene('SMARCB1'),
    this.gene('APC'),this.gene('CCND2'),this.gene('DNMT3A'),this.gene('FAM175A'),this.gene('FGFR1'),this.gene('JAK2'),this.gene('MRE11'),this.gene('NRG1'),this.gene('PTCH1'),this.gene('SMO'),
    this.gene('AR'),this.gene('CCND3'),this.gene('EGFR'),this.gene('FANCI'),this.gene('FGFR2'),this.gene('JAK3'),this.gene('MSH2'),this.gene('NTRK1'),this.gene('PTEN'),this.gene('SRC'),
    this.gene('ARID1A'),this.gene('CCNE1'),this.gene('EML4'),this.gene('FANCL'),this.gene('FGFR3'),this.gene('KDR'),this.gene('MSH3'),this.gene('NTRK2'),this.gene('PTPN11'),this.gene('STK11'),
    this.gene('ATM'),this.gene('CD79A'),this.gene('EP300'),this.gene('FBXW7'),this.gene('FGFR4'),this.gene('KIF5B'),this.gene('MSH6'),this.gene('NTRK3'),this.gene('RAD51'),this.gene('TERT'),
    this.gene('ATR'),this.gene('CD79B'),this.gene('ERBB2'),this.gene('FGF1'),this.gene('FLI1'),this.gene('KIT'),this.gene('MTOR'),this.gene('PALB2'),this.gene('RAD51B'),this.gene('TET2'),
    this.gene('AXL'),this.gene('CDH1'),this.gene('ERBB3'),this.gene('FGF10'),this.gene('FLT1'),this.gene('KMT2A'),this.gene('MUTYH'),this.gene('PAX3'),this.gene('RAD51C'),this.gene('TFRC'),
    this.gene('BAP1'),this.gene('CDK12'),this.gene('ERBB4'),this.gene('FGF14'),this.gene('FLT3'),this.gene('KRAS'),this.gene('MYC'),this.gene('PAX7'),this.gene('RAD51D'),this.gene('TMPRSS2'),
    this.gene('BARD1'),this.gene('CDK4'),this.gene('ERCC1'),this.gene('FGF19'),this.gene('FOXL2'),this.gene('LAMP1'),this.gene('MYCL'),this.gene('PDGFRA'),this.gene('RAD54L'),this.gene('TP53'),
    this.gene('BCL2'),this.gene('CDK6'),this.gene('ERCC2'),this.gene('FGF2'),this.gene('GEN1'),this.gene('MAP2K1'),this.gene('MYCN'),this.gene('PDGFRB'),this.gene('RAF1'),this.gene('TSC1'),
    this.gene('BCL6'),this.gene('CDKN2A'),this.gene('ERG'),this.gene('FGF23'),this.gene('GNA11'),this.gene('MAP2K2'),this.gene('MYD88'),this.gene('PIK3CA'),this.gene('RB1'),this.gene('TSC2'),
    this.gene('BRAF'),this.gene('CEBPA'),this.gene('ESR1'),this.gene('FGF3'),this.gene('GNAQ'),this.gene('MCL1'),this.gene('NBN'),this.gene('PIK3CB'),this.gene('RET'),this.gene('VHL'),
    this.gene('BRCA1'),this.gene('CHEK1'),this.gene('ETF1'),this.gene('FGF4'),this.gene('GNAS'),this.gene('MDM2'),this.gene('NF1'),this.gene('PIK3CD'),this.gene('RICTOR'),this.gene('XRCC2'),
  ];
}

private gene(name: String): Gene{
  let gene : Gene = new Gene();
  gene.gene = name;
  gene.selected = false;
  return gene;
}

  deleteRow(row:Table){
    let index:number = this.table.indexOf(row);
    this.table.splice(index,1);
    
    }

    showChecks():boolean {
      return this.panel === panel170;
    }

  selectDeselectAll(){
    for(let i:number=0;i<this.genes.length;i++) {
      this.genes[i].selected=this.selectedvalue;
    }
  }

  openDialog(ref: number): void {

    if(ref == undefined){
      ref = 1;
    }
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '1000px',
      height: '800px',
      data: ref,

    });

    dialogRef.afterClosed().subscribe(result => {
      this.table.push(result);
    });

  }

}

