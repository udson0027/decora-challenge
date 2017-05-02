import { NgModule } from '@angular/core';
import { UpdateSuccessComponent } from './update-success.component';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [BrowserModule, MaterialModule, FlexLayoutModule],
  declarations: [UpdateSuccessComponent],
  exports: [UpdateSuccessComponent]
})
export class UpdateSuccessModule { }
