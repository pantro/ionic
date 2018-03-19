import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

	lista: Array<any> = [
		{
			titulo: "Perro",
			color: "#444"
		},
		{
			titulo: "Gato",
			color: "#999"
		}
	]

  constructor(public navCtrl: NavController) {

  }

}
