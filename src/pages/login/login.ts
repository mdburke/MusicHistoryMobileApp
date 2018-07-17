import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Auth } from 'aws-amplify';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  account: {username: string, password: string, email: string, name: string} = {
    username: '',
    password: '',
    email: '',
    name: ''
  };

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private toastController: ToastController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    Auth.signUp({
      username: this.account.username,
      password: this.account.password,
      attributes: {
        email: this.account.email,
        name: this.account.name
      }
    }).then(data => {
      console.log(data);
    }).catch(error => {
      console.log(error);
    })
    // let message = 'Succesful Login';
    // let toast = this.toastController.create({
    //   message: message,
    //   duration: 3000,
    //   position: 'bottom'
    // });
    // toast.present();
  }

}
