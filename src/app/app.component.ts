import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TodayPage } from "../pages/today/today";
import { HistoryPage } from "../pages/history/history";
import { SettingsPage } from "../pages/settings/settings";
import { LoginPage } from '../pages/login/login';
import { DynamodbProvider } from "../providers/dynamodb/dynamodb";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TodayPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar,
              public splashScreen: SplashScreen, public dynamoDBService: DynamodbProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Today', component: TodayPage },
      { title: 'History', component: HistoryPage },
      { title: 'Settings', component: SettingsPage },
      { title: 'Login/Signup', component: LoginPage }
    ];



  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
