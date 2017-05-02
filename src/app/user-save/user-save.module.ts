import { NgModule } from '@angular/core';
import { UserSaveComponent } from './user-save.component';
import {UserService} from '../shared/user-service/user-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [BrowserModule, FormsModule, MaterialModule, FlexLayoutModule],
  declarations: [UserSaveComponent],
  exports: [UserSaveComponent],
  providers: [UserService]
})
export class UserSaveModule { }
