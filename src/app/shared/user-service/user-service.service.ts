import { Injectable } from '@angular/core';
import { User } from '../models/user-model.module';
import {Router} from '@angular/router';

@Injectable()
export class UserService {

  lastId: number = 1;
  users: User[] = [];
  constructor(private route: Router) {
    this.users.push(new User({id: 0, name: 'admin', email: 'admin@email.com', password: '123456', admin: true}));
    this.users.push(new User({id: 1, name: 'normaluser', email: 'normaluser@email.com', password: '123456', admin: false}));
  }

  // simula um Post
  post(user: User): UserService {
    if (!user.id) {
      user.id = ++this.lastId;
    }
    this.users.push(user);
    return this;
  }

  // simula um GET de uma lista
  getList(): User[] {
    return this.users;
  }

  // simula um GET
  getById(id: number): User {
    return this.users
      .filter(user => user.id === id)
      .pop();
  }

  // simula um DELETE
  deleteById(id: number): UserService {
    this.users = this.users
      .filter(user => user.id !== id);
    return this;
  }

  // simula um PUT
  updateById(id: number, values: Object = {}): User {
    let user = this.getById(id);
    if (!user) {
      return null;
    }
    Object.assign(user, values);
    return user;
  }

  // loga o usuario
  login(name: string, password: string): User {
    let currentUser = this.users.filter(user => user.name === name).pop();
    if (currentUser && currentUser.password === password) {
      return currentUser;
    }
  }

  // desloga o usuarion
  logout() {
    this.route.navigateByUrl('/');
    localStorage.removeItem('currentUser');
    // location.href = '/';
  }
}
