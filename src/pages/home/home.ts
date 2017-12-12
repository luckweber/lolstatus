import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController, Nav } from 'ionic-angular';
import { App, ViewController } from 'ionic-angular';

//Importar  Pgina
import { DashboardPage } from '../../pages/dashboard/dashboard'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Nav) nav: Nav;

  regions:any = Array<{name:string, id:any}>();

  constructor(public appCtrl: App, public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {

    this.regions = [
      {name:'Brasil', id:'pt_BR'},
      {name:'EUA',    id:'en_US'},
      {name:'Coreia do Sul', id:'ko_KR'}
  ]
}

  goDashboard(region){
    this.navCtrl.push(DashboardPage, {region});
    //this.nav.setRoot(DashboardPage, {region});
    //this.appCtrl.getRootNav().push(DashboardPage);
  }

}
