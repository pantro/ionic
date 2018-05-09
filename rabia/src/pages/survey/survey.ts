import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {Geolocation} from "@ionic-native/geolocation";
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the SurveyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'SurveyPage'
})
@Component({
  selector: 'page-survey',
  templateUrl: 'survey.html',
})
export class SurveyPage {
  public survey: {latitud?: number, longitud?: number, precision?: number} = {};
  public submited: boolean = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private geolocation: Geolocation,
    private loadingCtrl: LoadingController,
    private camera: Camera) {

    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SurveyPage');
  }

  onSurvey(form: NgForm) {
    this.submited = true;
    if(form.valid) {
      /*this.authProvider.login(this.login).subscribe(
        (data) => {
          if(data.user) {
            this.authProvider.isLoggedIn = true;
            localStorage.setItem('user', JSON.stringify(data.user));
            this.navCtrl.push('SurveyPage');
          }
          else
          {
            console.log('error login');
          }
        }
      )*/
    }
  }

  getGPS () {
    let loading = this.loadingCtrl.create({
      content: 'Obteniendo GPS...'
    });
    loading.present();

    this.geolocation.getCurrentPosition({
      enableHighAccuracy: true
    })
      .then((res) => {
        this.survey.latitud= res.coords.latitude;
        this.survey.longitud= res.coords.longitude;
        this.survey.precision= res.coords.accuracy;
        loading.dismiss();
      });
    
    /*this.geolocation.watchPosition().subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      this.survey.latitud= data.coords.latitude;
      this.survey.longitud= data.coords.longitude;
      this.survey.precision= data.coords.accuracy;
      loading.dismiss();
    });*/
  }

  startCamera() {
    //Nuevas funciones de nueva camara
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum:true
    }
    
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }
}

