import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../shared/user-service/user-service.service';
import { User } from '../shared/models/user-model.module';
import { MdDialog } from '@angular/material';
import { DeleteDialogComponent } from '../shared/delete-dialog/delete-dialog.component';
import { UpdateSuccessComponent } from '../shared/update-success/update-success.component';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css', '../shared/stylesheet/button-color.css']
})
export class UserEditComponent implements OnInit {

  id: number;
  user: any;

  constructor(
                private route: ActivatedRoute,
                private UserService: UserService,
                public dialog: MdDialog,
                private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.user = new User(this.UserService.getById(this.id));
    });
  }

  delete(user) {
    let dialogRef = this.dialog.open(DeleteDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.UserService.deleteById(user.id);
        this.router.navigateByUrl('/');
      }
    });
  }

  update(user) {
    let aux = this.UserService.updateById(user.id, user);
    if (!aux) {
      console.log('ERRO');
      return;
    }
    this.dialog.open(UpdateSuccessComponent);
  }
}
