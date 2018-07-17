import { NgModule } from '@angular/core';
import { IonicPageModule, ToastController } from 'ionic-angular';
import { LoginPage } from './login';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
})
export class LoginPageModule {
  constructor() {
  }
}
