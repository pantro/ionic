import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {UsersProvider} from "../../providers/users/users";

@Component({
  selector: 'page-users-add',
  templateUrl: 'users-add.html',
})
export class UsersAddPage {

  public user: {username?: string, email?: string, password?: string} = {};
  constructor(public navCtrl: NavController, private usersProvider: UsersProvider) {
  }

  save() {
    this.usersProvider.add(this.user).then((success) => {
      this.navCtrl.setRoot('DashboardPage');
    })
  }

}
