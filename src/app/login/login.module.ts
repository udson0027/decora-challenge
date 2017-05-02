import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { UserService } from '../shared/user-service/user-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [LoginRoutingModule, BrowserModule, FormsModule, MaterialModule, FlexLayoutModule],
  declarations: [LoginComponent],
  exports: [LoginComponent],
  providers: [UserService]
})
export class LoginModule { }
