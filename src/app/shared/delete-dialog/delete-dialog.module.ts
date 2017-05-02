import { NgModule } from '@angular/core';
import { DeleteDialogComponent } from './delete-dialog.component';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [BrowserModule, MaterialModule, FlexLayoutModule],
  declarations: [DeleteDialogComponent],
  exports: [DeleteDialogComponent]
})
export class DeleteDialogModule { }
