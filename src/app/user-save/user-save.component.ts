import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user-service/user-service.service';
import {MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-user-save',
  templateUrl: './user-save.component.html',
  styleUrls: ['./user-save.component.css', '../shared/stylesheet/button-color.css']
})
export class UserSaveComponent implements OnInit {
  user: any;
  showSuccess: boolean = false;
  constructor(private UserService: UserService, public dialogRef: MdDialogRef<UserSaveComponent>) { }
  ngOnInit() {
  }

  submitForm(form: any): void {
    if (form.invalid) {
      return;
    }
    let aux = this.UserService.post(form.value);
    if (aux) {
      this.showSuccess = true;
    }
  }
}
