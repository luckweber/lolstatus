import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


import {  ProviderServiceProvider } from '../../providers/provider-service/provider-service';


import { ChampionPage } from '../../pages/champion/champion';


@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  championsArray:any[]= [];
  championsArrayOrigin:any[]= [];
  private urlLocal = 'assets/json/summoners.json';
  bindArgs:string;



  constructor(public http: Http, public apiProvider:ProviderServiceProvider, public navCtrl: NavController, public navParams: NavParams) {

    let object = navParams.get('region');


    if (object !== null) {
      this.urlLocal = `assets/json/summoners_${object.id}.json`;
    }

    apiProvider.getChampionsFull(this.urlLocal).subscribe(champion => {
      let  keys = champion.keys;
      for (let key of Object.keys(keys)) {
        let championKey = keys[key];
      this.championsArray.push(champion.data[`${championKey}`]);
      this.championsArrayOrigin = this.championsArray;
      }
    });
  }

  goToDetails(objectParam: any) {
    this.navCtrl.push(ChampionPage, {objectParam});
  }

  search() {
    //let term = searchEvent.target.value;
    let term = this.bindArgs;
    if (term.trim() === '' || term.trim().length < 3) {
      // Load cached users
      this.championsArray = this.championsArrayOrigin;
    } else {

      this.championsArray = this.transforms(this.championsArray , term);
    }
  }

  transforms(items: any[], args: any): any {
      let argss = args[0].toUpperCase() + args.slice(1);

      return items.filter(item => item.name.indexOf(argss) !== -1);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

}
