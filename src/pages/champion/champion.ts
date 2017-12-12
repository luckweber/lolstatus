import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChampionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


 import { ChampionSummaryPage} from '../../pages/champion-summary/champion-summary';
 import { ChampionBuildPage} from '../../pages/champion-build/champion-build';


@IonicPage()
@Component({
  selector: 'page-champion',
  templateUrl: 'champion.html',
})
export class ChampionPage {
  objectparam:any;
  imageUrl:any;

  params:any;


  tab1Root:any = ChampionSummaryPage;
  tab2Root:any = ChampionBuildPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let url = navParams.get('objectParam');
    this.objectparam = url;

    this.params = navParams;

}
  ionViewDidLoad() {
    console.log('ionViewDidLoad ChampionPage');
  }

}
