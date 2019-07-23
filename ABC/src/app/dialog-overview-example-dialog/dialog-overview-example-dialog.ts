import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Table } from '../Table';
import { FormGroup, FormControl } from '@angular/forms';
import { Illness } from './Illness';


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

  illnesses: Illness[] = [
    {id:1, type: "Tumor primario"},
    {id:2, type: "Metástasis"},
    {id:3, type: "Recidiva"},
    {id:4, type: "Tejido sano"}
  ];

  constructor(
    public dialogRef: MatDialogRef<Table>,
    @Inject(MAT_DIALOG_DATA) public ref : number){}
    

  


  onNoClick(): void {
    this.dialogRef.close();
  }

  showRef():boolean {
    return this.checkref === true;
  }

  save(): void {
    this.dialogRef.close({data:this.row});
  }

}