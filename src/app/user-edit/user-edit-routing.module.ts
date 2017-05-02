import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserEditComponent } from './user-edit.component';
import {AuthGuardServiceService} from '../shared/auth-guard-service/auth-guard-service.service';
import {AdminAuthGuardServiceService} from '../shared/admin-auth-guard-service/admin-auth-guard-service.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'edit/:id', component: UserEditComponent, canActivate: [AuthGuardServiceService, AdminAuthGuardServiceService]}
    ])
  ],
  exports: [RouterModule],
  providers: [AuthGuardServiceService, AdminAuthGuardServiceService]
})
export class UserEditRoutingModule { }

