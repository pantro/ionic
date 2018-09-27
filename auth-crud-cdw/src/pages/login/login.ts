import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AuthProvider} from "../../providers/auth/auth";
import {NgForm} from "@angular/forms";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public login: {username?: '', password?: ''} = {};
  public submited: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authProvider: AuthProvider
  ) {
  }

  onLogin(form: NgForm) {
    this.submited = true;
    if(form.valid) {
      this.authProvider.login(this.login).subscribe(
        (data) => {
          if(data.user) {
            this.authProvider.isLoggedIn = true;
            localStorage.setItem('user', JSON.stringify(data.user));
            this.navCtrl.push('AuthTabs');
          }
          else
          {
            console.log('error login');
          }
        }
      )
    }
  }

}
