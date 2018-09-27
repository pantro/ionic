import { Component } from '@angular/core';
import {App, IonicPage, NavController} from 'ionic-angular';
import {LoginPage} from "../login/login";

@Component({
  selector: 'page-auth-tabs',
  templateUrl: 'auth-tabs.html'
})
@IonicPage({
  name: 'AuthTabs'
})
export class AuthTabsPage {

  dashboardPageRoot = 'DashboardPage'
  profilePageRoot = 'ProfilePage'


  constructor(public navCtrl: NavController, public appCtrl: App) {}

  logout() {
    this.appCtrl.getRootNav().setRoot(LoginPage);
  }

}
