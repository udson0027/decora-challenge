import { NgModule } from '@angular/core';
import { UserListComponent } from './user-list.component';
import { UserListRoutingModule } from './user-list-routing.module';
import { UserService } from '../shared/user-service/user-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../shared/tools/filter-pipe';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';
import { UserSaveComponent } from '../user-save/user-save.component';
import {AuthGuardServiceService} from '../shared/auth-guard-service/auth-guard-service.service';

@NgModule({
  imports: [
    UserListRoutingModule, BrowserModule, FormsModule, FlexLayoutModule,
    MaterialModule
  ],
  declarations: [UserListComponent, FilterPipe],
  entryComponents: [UserSaveComponent],
  exports: [UserListComponent],
  providers: [UserService, AuthGuardServiceService]
})
export class UserListModule { }
