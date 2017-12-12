import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChampionSpellPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-champion-spell',
  templateUrl: 'champion-spell.html',
})
export class ChampionSpellPage {
  name:any;
  title:any;
  key:any;
  lore:any;
  stats:any;
  passive:any;
  spells:any;
  ei = 11;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let  params = navParams.get('objectParam');
    this.name = params.name;
    this.title = params.title;
    this.key = params.key;
    this.lore = params.lore;
    this.stats = params.stats;
    this.passive = params.passive;
    this.spells = params.spells;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChampionSpellPage');
  }

}
