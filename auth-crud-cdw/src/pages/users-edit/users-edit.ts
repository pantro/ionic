import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UsersProvider} from "../../providers/users/users";

@IonicPage()
@Component({
  selector: 'page-users-edit',
  templateUrl: 'users-edit.html',
})
export class UsersEditPage {

  public user: {username?: string, email?: string, password?: string} = {};
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public usersProvider: UsersProvider
  ) {
    const id = this.navParams.get('id');
    usersProvider.find(id).subscribe((user) => {
      this.user = user[0];
      this.user.password = '';
    })
  }

  update(user) {
    this.usersProvider.update(user).then((success) => {
      this.navCtrl.setRoot('DashboardPage');
    })
  }

}
