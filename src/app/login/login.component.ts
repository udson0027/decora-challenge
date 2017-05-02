import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user-service/user-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../shared/stylesheet/button-color.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  showError: boolean = false;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.logout();
  }

  login() {
    const currentUser = this.userService.login(this.username, this.password);
    if (currentUser) {
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      this.router.navigateByUrl('/');
      return;
    }
    this.showError = true;
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
