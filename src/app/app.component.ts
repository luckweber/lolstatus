import { Component,ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MenuController, Nav } from 'ionic-angular';

import { HomePage } from '../pages/home/home';

//Importar Paginas
import { DashboardPage } from '../pages/dashboard/dashboard';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;
  pages:any = Array<{name:string, component:any}>();

  constructor(public menu: MenuController, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    this.pages = [
      {name:'Dashboard', component:DashboardPage}
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


  openPage(page){

    this.menu.close();
    this.nav.setRoot(page.component);

  };
}
