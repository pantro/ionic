import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { AuthProvider } from '../providers/auth/auth';
import {LoginPage} from "../pages/login/login";
import {HttpModule} from "@angular/http";
import { UsersProvider } from '../providers/users/users';
import { UserFormComponent } from '../components/user-form/user-form';
import {UsersAddPage} from "../pages/users-add/users-add";
import {UsersEditPage} from "../pages/users-edit/users-edit";

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    UserFormComponent,
    UsersAddPage,
    UsersEditPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    UsersAddPage,
    UsersEditPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider, UsersProvider, UsersProvider, UsersProvider
  ]
})
export class AppModule {}
