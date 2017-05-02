import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserListComponent } from './user-list.component';
import {AuthGuardServiceService} from '../shared/auth-guard-service/auth-guard-service.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: UserListComponent , canActivate: [AuthGuardServiceService]}
    ])
  ],
  exports: [RouterModule],
  providers: [AuthGuardServiceService]
})
export class UserListRoutingModule { }

