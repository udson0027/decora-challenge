/**
 * Created by udson on 27/04/2017.
 */
import { NgModule } from '@angular/core';
import { UserEditComponent } from './user-edit.component';
import { UserEditRoutingModule } from './user-edit-routing.module';
import { UserService } from '../shared/user-service/user-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DeleteDialogComponent } from '../shared/delete-dialog/delete-dialog.component';
import { UpdateSuccessComponent } from '../shared/update-success/update-success.component';

@NgModule({
  imports: [UserEditRoutingModule, BrowserModule, FormsModule, MaterialModule, FlexLayoutModule],
  declarations: [UserEditComponent],
  entryComponents: [DeleteDialogComponent, UpdateSuccessComponent],
  exports: [UserEditComponent],
  providers: [UserService]
})
export class UserEditModule { }
