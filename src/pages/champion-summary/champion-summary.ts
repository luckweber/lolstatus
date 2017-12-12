import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChampionSummaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-champion-summary',
  templateUrl: 'champion-summary.html',
})
export class ChampionSummaryPage {
  name:any;
  title:any;
  key:any;
  lore:any;
  stats:any;
  passive:any;




  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let  params = navParams.get('objectParam');
    this.name = params.name;
    this.title = params.title;
    this.key = params.key;
    this.lore = params.lore;
    this.stats = params.stats;
    this.passive = params.passive;
    console.log('params from UserProfilePage', params); // there is no data

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChampionSummaryPage');
  }

}
