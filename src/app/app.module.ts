import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


//Novas Paginas
import { ChampionPage } from '../pages/champion/champion';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { ChampionSpellPage } from '../pages/champion-spell/champion-spell';
import { ChampionBuildPage } from '../pages/champion-build/champion-build';
import { ChampionSummaryPage } from '../pages/champion-summary/champion-summary';
import { ProviderServiceProvider } from '../providers/provider-service/provider-service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChampionPage,
    DashboardPage,
    ChampionBuildPage,
    ChampionSummaryPage,
    ChampionSpellPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChampionPage,
    DashboardPage,
    ChampionBuildPage,
    ChampionSummaryPage,
    ChampionSpellPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProviderServiceProvider
  ]
})
export class AppModule {}
