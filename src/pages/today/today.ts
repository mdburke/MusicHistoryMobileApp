import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ENV } from "@app/env";
import { DynamodbProvider } from "../../providers/dynamodb/dynamodb";

/**
 * Generated class for the TodayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-today',
  templateUrl: 'today.html',
})
export class TodayPage {
  model: any = {
    day: '',
    year: '',
    artist: '',
    description: '',
    album: '',
    song: '',
    wiki: '',
    spotify: '',
    website: ''
  };

  date: Date;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dynamoService: DynamodbProvider) {
    console.log(ENV.dynamo_url);
    console.log(ENV.mode);
  }

  async ionViewDidLoad() {
    console.log('ionViewDidLoad TodayPage');
    this.date = new Date();
    let data = await this.dynamoService.queryByDay(this.date.getDate().toString());
    console.log(data);
  }

}
