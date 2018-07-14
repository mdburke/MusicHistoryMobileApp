import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TodayPage } from "../pages/today/today";
import { SettingsPage } from "../pages/settings/settings";
import { HistoryPage } from "../pages/history/history";

import Amplify from 'aws-amplify';
import { LoginPage } from "../pages/login/login";
import { secrets } from "../../resources/secrets";

@NgModule({
  declarations: [
    MyApp,
    HistoryPage,
    TodayPage,
    SettingsPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TodayPage,
    SettingsPage,
    HistoryPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
  constructor() {
    Amplify.configure({
      Auth: secrets.auth
    });
  }
}
