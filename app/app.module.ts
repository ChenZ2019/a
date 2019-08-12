import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatFormField, MatFormFieldModule, MatAutocompleteModule, MatInputModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import { SampleRequest, } from './SampleRequest/SampleRequest';

@NgModule({
  declarations: [
    AppComponent,
    SampleRequest
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  exports: [
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    SampleRequest
  ]
})
export class AppModule { }
