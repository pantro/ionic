import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {UsersProvider} from "../../providers/users/users";
import {UsersAddPage} from "../users-add/users-add";
import {UsersEditPage} from "../users-edit/users-edit";

@IonicPage({
  name: 'DashboardPage'
})
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  public users = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public usersProvider: UsersProvider,
    public alertCtrl: AlertController
  ) {
    usersProvider.all().subscribe(users => {
      console.log(users);
      this.users = users;
    })
  }

  add() {
    this.navCtrl.push(UsersAddPage);
  }

  detail(user) {
    this.navCtrl.push('user-detail', {
      'id': user.id
    })
  }

  edit(user) {
    this.navCtrl.push(UsersEditPage, {
      'id': user.id
    })
  }

  remove(user) {
    let confirm = this.alertCtrl.create({
      title: 'Eliminar usuario',
      subTitle: '¿Seguro que quieres realizar esta acción?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('NO');
          }
        },
        {
          text: 'Sí',
          handler: () => {
            this.usersProvider.delete(user.id).then(() => {
              this.usersProvider.all().subscribe((users) => {
                this.users = users;
              })
            });
          }
        }
      ]
    });
    confirm.present();
  }
}
