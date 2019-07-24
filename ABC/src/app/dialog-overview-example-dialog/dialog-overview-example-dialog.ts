import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Table } from '../Table';
import { FormGroup, FormControl } from '@angular/forms';
import { Illness } from './Illness';
import { TypeOfSample } from './TypeOfSample';


/**
 * @title Dialog Overview
 */

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  row: Table = new Table();
  checkref: boolean;
  ref:number;

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

  save(): void {
    if(this.data.row != null){
      Object.assign(this.data.row, this.row);
    }
    this.dialogRef.close(this.row);

  }

}