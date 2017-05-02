import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user-service/user-service.service';
import { MdDialog } from '@angular/material';
import { UserSaveComponent } from '../user-save/user-save.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css', '../shared/stylesheet/button-color.css']
})
export class UserListComponent implements OnInit {

  users: any[] = [];
  filterString = '';
  currentUser: any;
  constructor(private UserService: UserService, public dialog: MdDialog) { }

  ngOnInit() {
    this.getUsers();
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  getUsers() {
    this.users = this.UserService.getList();
  }

  openDialog() {
    let dialogRef = this.dialog.open(UserSaveComponent, {
      height: '400px',
      width: '600px',
    });
  }
}
