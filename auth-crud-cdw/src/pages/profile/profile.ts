import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AuthProvider} from "../../providers/auth/auth";

/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  public user = null;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authProvider: AuthProvider
  ) {
    this.user = authProvider.getUser();
  }


}
