import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-update-success',
  templateUrl: './update-success.component.html',
  styleUrls: ['./update-success.component.css', '../stylesheet/button-color.css']
})
export class UpdateSuccessComponent {

  constructor(public dialogRef: MdDialogRef<UpdateSuccessComponent>) { }
}
